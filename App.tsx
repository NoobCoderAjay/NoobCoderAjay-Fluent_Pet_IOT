import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import FontLoader from "./src/components/FontLoader";
import RootNavigator from "@navigation/navigators/RootNavigator";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function App() {
  return (
    <ActionSheetProvider>
      <FontLoader>
        <View className="flex-1 bg-transparent">
          <StatusBar
            style="dark"
            backgroundColor="transparent"
            translucent={true}
          />
          <RootNavigator authToken={null} />
        </View>
      </FontLoader>
    </ActionSheetProvider>
  );
}
