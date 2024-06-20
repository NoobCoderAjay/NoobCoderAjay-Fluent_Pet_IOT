import React from "react";
import { Ionicons } from "@expo/vector-icons";
import NavigationButtonContainer from "./NavigationButtonContainer";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Navigator, Screen } from "@navigation/constants";

const NotificationIcon: React.FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const onNotificationPress = async () => {
    navigation.navigate(Navigator.MODAL, {
      screen: Screen.NOTIFICATION,
    });
  };

  return (
    <NavigationButtonContainer side="right" onPress={onNotificationPress}>
      <Ionicons name="notifications-outline" size={24} color="#006271" />
    </NavigationButtonContainer>
  );
};

export default NotificationIcon;
