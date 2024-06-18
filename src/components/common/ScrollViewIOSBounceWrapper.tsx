// import React from "react";
// import { StyleSheet, View } from "react-native";

// import { IS_IOS } from "src/constants";

// /*

// IOS ONLY:
// If the bounce area above and below the ScrollView should be two different colors
// Wrap the scroll view with this component and specify the top and bottom bounce colors

// */

// interface Props {
//   children: React.ReactNode;
//   topBounceColor: string;
//   bottomBounceColor: string;
// }

// const ScrollViewIOSBounceWrapper: React.FC<Props> = ({
//   topBounceColor,
//   bottomBounceColor,
//   children,
// }) => {
//   if (IS_IOS) {
//     return (
//       <View style={styles.flex}>
//         {children}
//         <View style={styles.container}>
//           <View style={{ backgroundColor: topBounceColor, ...styles.flex }} />
//           <View
//             style={{ backgroundColor: bottomBounceColor, ...styles.flex }}
//           />
//         </View>
//       </View>
//     );
//   }
//   return <>{children}</>;
// };

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: -1,
//   },
//   flex: {
//     flex: 1,
//   },
// });

// export default ScrollViewIOSBounceWrapper;
