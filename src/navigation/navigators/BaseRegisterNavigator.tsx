import { Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen, ScreenTitle } from "@navigation/constants";
import SetupConnection from "src/Home/Hardware/SetupConnection";
import ConnectStepOne from "src/Home/Hardware/ConnectStepOne";
import ConnectStepTwo from "src/Home/Hardware/ConnectStepTwo";
import { ConnectToBase } from "src/Home/Hardware/ConnectToBase";
import ConnectStepThree from "src/Home/Hardware/ConnectStepThree";
import ConnectSetupFour from "src/Home/Hardware/ConnectSetupFour";
import ConnectSetupFive from "src/Home/Hardware/ConnectSetupFive";
import { screenOptions } from "@navigation/options";

const Stack = createStackNavigator();
const BaseRegisterNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Screen.CONNECTION_SETUP}
        component={SetupConnection}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_ONE}
        component={ConnectStepOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_TWO}
        component={ConnectStepTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_TO_BASE}
        options={{ headerShown: false }}
      >
        {(props) => (
          <ConnectToBase
            {...props}
            baseSerialNumber=""
            onChangeBaseSerialNumber={(ssid) => {}}
            onOpenQRScanner={() => {}}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_THREE}
        component={ConnectStepThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_FOUR}
        component={ConnectSetupFour}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_FIVE}
        component={ConnectSetupFive}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default BaseRegisterNavigator;
