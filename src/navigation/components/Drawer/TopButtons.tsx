import React from "react";
import { View } from "react-native";

import DrawerButton from "./DrawerButton";
import { Colors } from "../../../theme/Colors";

export interface TopButton {
  visible: boolean;
  label: string;
  iconLeft: React.ReactNode;
  onPress(): void;
}

interface Props {
  buttons: TopButton[];
  marginBottom?: number;
}

const SHARED_BUTTON_PROPS = {
  color: Colors.WHITE,
  textColor: Colors.PRIMARY_DARK,
  fullWidth: true,
};

const TopButtons: React.FC<Props> = ({ buttons, marginBottom }) => {
  return (
    <>
      {buttons.map((button, idx) =>
        button.visible ? (
          <View key={`${button.label}-${idx}}`}>
            <DrawerButton
              {...SHARED_BUTTON_PROPS}
              marginBottom={marginBottom}
              label={button.label}
              iconLeft={button.iconLeft}
              onPress={button.onPress}
            />
          </View>
        ) : null
      )}
    </>
  );
};

export default TopButtons;
