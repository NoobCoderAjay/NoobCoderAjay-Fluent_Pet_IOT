import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";

import { DrawerButton, FluentPetButton } from "../components";
import IconLeft from "@navigation/components/IconLeft";
import NotificationIcon from "@navigation/components/NotificationIcon";

interface ScreenOptionsParams {
  title?: string | boolean;
  showDrawerButton?: boolean;
  showFluentPetButton?: boolean;
  showIconLeft?: boolean;
  showNotificationIcon?: boolean;
}

export const getFirstScreenOptions =
  ({
    title,
    showDrawerButton,
    showFluentPetButton,
    showIconLeft,
    showNotificationIcon,
  }: ScreenOptionsParams): (() => StackNavigationOptions) =>
  () => ({
    title: typeof title === "string" ? title : undefined,
    headerLeft: showDrawerButton
      ? () => <DrawerButton />
      : showIconLeft
      ? () => <IconLeft />
      : undefined,
    headerRight: showFluentPetButton
      ? () => <FluentPetButton />
      : showNotificationIcon
      ? () => <NotificationIcon />
      : undefined,
    gestureDirection: "horizontal-inverted",
  });
