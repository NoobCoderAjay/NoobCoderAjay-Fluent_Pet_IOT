import { CompositeNavigationProp } from '@react-navigation/native';

export const isFirstScreenInStack = (
  navigation: CompositeNavigationProp<any, any>,
): boolean => {
  const parentRoutes = navigation.getParent()?.getState()?.routes;

  if (!parentRoutes) {
    return false;
  }

  const routeState = parentRoutes[1]?.state;

  return !routeState?.index || routeState.index === 0;
};
