// import React from "react";
// import { StyleSheet, TouchableOpacity, View } from "react-native";
// import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
// import { Colors } from "src/theme/Colors";
// import { Navigator } from "@navigation/constants";
// import {
//   Activity,
//   Bases,
//   HomeImage,
//   HouseHold,
//   Module,
// } from "src/assets/icons";
// interface Route {
//   key: string;
//   name: string;
//   params?: object | undefined;
// }

// const TabBar: React.FC<BottomTabBarProps> = ({
//   state,
//   descriptors,
//   navigation,
// }) => {
//   return (
//     <View style={styles.tabBar}>
//       {state?.routes?.map((route: Route, index: any) => {
//         const { options } = descriptors[route.key];
//         const isFocused = state.index === index;
//         const color = isFocused ? Colors.WHITE : Colors.SECONDARY_LIGHT;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: "tabPress",
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const renderIcon = (name: string, color: Colors) => {
//           switch (name) {
//             case Navigator.ACTIVITY.replace("Nav", ""):
//               return <Activity color={color} />;
//             case Navigator.LANDING_NAV.replace("Nav", ""):
//               return <HomeImage color={color} />;
//             case Navigator.MODULE_NAV.replace("Nav", ""):
//               return <Module color={color} />;
//             case Navigator.HARDWARE.replace("Nav", ""):
//               return <Bases color={color} />;
//             case Navigator.HOUSEHOLD.replace("Nav", ""):
//               return <HouseHold color={color} />;
//             default:
//               return null;
//           }
//         };

//         return (
//           <TouchableOpacity
//             key={route.name}
//             onPress={onPress}
//             style={styles.tabButton}
//           >
//             {renderIcon(route.name, color)}
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#006271",
//     height: 70,
//     padding: 10,
//     position: "absolute",
//     borderTopRightRadius: 15,
//     borderTopLeftRadius: 15,
//     width: "100%",
//   },
//   tabButton: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
// });

// export default TabBar;
