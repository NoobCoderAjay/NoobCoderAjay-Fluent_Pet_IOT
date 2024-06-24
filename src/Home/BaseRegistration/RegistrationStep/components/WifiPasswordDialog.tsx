import React, { useState } from 'react';
import Dialog from 'react-native-dialog';

interface Props {
  visible: boolean;
  wifiNetworkSSID: string;
  wifiNetworkPassword: string;
  closePrompt(): void;
  onChangePassword(value: string): void;
  onSubmit(): void;
}

export const WifiPasswordDialog: React.FC<Props> = ({
  visible,
  wifiNetworkSSID,
  wifiNetworkPassword,
  closePrompt,
  onChangePassword,
  onSubmit,
}) => {
  const [isPasswordSecureText, setIsPasswordSecuretText] = useState(true);

  const onSubmitPress = () => {
    closePrompt();
    onSubmit();
  };

  const onChangeIsSecureText = () => {
    setIsPasswordSecuretText((prevState) => !prevState);
  };

  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Enter password</Dialog.Title>
      <Dialog.Description>
        {`Please enter the password for ${wifiNetworkSSID}`}
      </Dialog.Description>
      <Dialog.Input
        textContentType="password"
        autoComplete="off"
        autoCorrect={false}
        value={wifiNetworkPassword}
        onChange={(e) => onChangePassword(e.nativeEvent.text)}
        secureTextEntry={isPasswordSecureText}
      />
      <Dialog.Switch
        label="Hide text"
        value={isPasswordSecureText}
        onChange={onChangeIsSecureText}
      />
      <Dialog.Button label="Cancel" onPress={closePrompt} />
      <Dialog.Button label="Submit" onPress={onSubmitPress} />
    </Dialog.Container>
  );
};
