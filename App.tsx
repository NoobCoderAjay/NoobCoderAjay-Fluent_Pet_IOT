import React from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import FontLoader from "./src/components/FontLoader";

import RootNavigator from "@navigation/navigators/RootNavigator";

export default function App() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <StatusBar
          style="dark"
          backgroundColor="transparent"
          translucent={true}
        />
        <RootNavigator authToken={null} />
      </View>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
