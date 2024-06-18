import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";

import { DrawerButton, FluentPetButton } from "../components";

export const getFirstScreenOptions =
  (title: string) => (): StackNavigationOptions => ({
    title,
    headerLeft: () => <DrawerButton />,
    // headerRight: () => <FluentPetButton />,
    gestureDirection: "horizontal-inverted",
  });
