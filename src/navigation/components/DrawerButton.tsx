import {
  useNavigation,
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { DrawerIcon } from "src/assets/icons";
import NavigationButtonContainer from "./NavigationButtonContainer";

const DrawerButton: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <NavigationButtonContainer
      side="left"
      onPress={openDrawer}
      style={styles.buttonWrapper}
    >
      <DrawerIcon />
    </NavigationButtonContainer>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: { paddingHorizontal: 5, paddingVertical: 10 },
});

export default DrawerButton;
