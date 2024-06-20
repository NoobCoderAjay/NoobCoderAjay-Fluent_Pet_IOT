import React from "react";
import { StyleSheet, View } from "react-native";

import { Button as ButtonType } from "src/model/interaction";
import { Color } from "src/theme/Color";
import { SizeV2 } from "src/theme/Size";
import { ButtonBadge, ButtonVariant } from "../ButtonBadge";
import { Colors } from "src/theme/Colors";

interface Props {
  buttons: ButtonType[];
  buttonVariant?: ButtonVariant;
  onButtonPress?: (button: ButtonType) => void;
}

const DashboardButtons: React.FC<Props> = ({
  buttons,
  buttonVariant,
  onButtonPress,
}) => {
  const renderButton = (button: ButtonType, index: number) => (
    <View key={index} style={styles.buttonContainer}>
      <ButtonBadge
        backgroundColor={button?.base ? Colors.GREEN_NEW : Colors.GREEN_NEW}
        color={Color.BLUE_500}
        variant={buttonVariant ?? ButtonVariant.SMALL}
        title={button.text}
        onPress={onButtonPress ? () => onButtonPress(button) : undefined}
      />
    </View>
  );
  return <View style={styles.container}>{buttons.map(renderButton)}</View>;
};

export default DashboardButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    // paddingHorizontal: SizeV2.S,
    paddingVertical: SizeV2.XS,
    borderRadius: 5,
    marginRight: SizeV2.X2_S,
  },
  buttonContainer: {
    marginBottom: SizeV2.X2_S,
    marginRight: SizeV2.X2_S,
  },
});
