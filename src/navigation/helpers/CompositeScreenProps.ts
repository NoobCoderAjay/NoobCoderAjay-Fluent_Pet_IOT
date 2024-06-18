import {
  CompositeNavigationProp,
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

type RoutePropWithOptionalRouteParam<
  P extends ParamListBase,
  R extends keyof P = keyof P,
> = RouteProp<P, R>;

export type CompositeScreenProps<
  A extends {
    navigation: NavigationProp<ParamListBase, string, any, any>;
    route: RoutePropWithOptionalRouteParam<ParamListBase>;
  },
  B extends {
    navigation: NavigationProp<ParamListBase, any>;
  },
> = {
  navigation: CompositeNavigationProp<A['navigation'], B['navigation']>;
  route: A['route'];
};
