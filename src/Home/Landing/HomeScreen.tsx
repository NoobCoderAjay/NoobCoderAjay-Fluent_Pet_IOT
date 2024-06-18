import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

//@ts-ignore
import Buy from "../../assets/images/newImages/Buy.png";
//@ts-ignore
import Learner_Activity from "../../assets/images/newImages/Learner_Activity.png";
import UserInfoBox from "src/components/Landing/Box/UserInfoBox";
import ActivityBox from "src/components/Landing/Box/ActivityBox";
import WelComeBox from "src/components/Landing/Box/WelComeBox";
import ProTipBox from "src/components/Landing/Box/ProTipBox";
import LearnerActivityBox from "src/components/Landing/Box/LearnerActivityBox";

type Props = {};

const HomeScreen = (_props: Props) => {
  const navigation: any = useNavigation();
  const handlePurchase = () => {
    return Linking.openURL("https://eu.fluent.pet/");
  };
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <UserInfoBox />
          {/* <StreakBox /> */}
          <ActivityBox />
          <WelComeBox />
          <ProTipBox />
          <LearnerActivityBox />
          <View style={styles.LastImageContainer}>
            <TouchableOpacity
              onPress={() =>
                // navigation.navigate({ name: Navigator.HARDWARE, merge: true })
                {}
              }
            >
              <Image source={Learner_Activity} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePurchase}>
              <Image source={Buy} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const screenHeight = Dimensions.get("window").height;
const paddingBottom = screenHeight * 0.08;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    height: "auto",
  },

  LastImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  scrollContainer: { paddingBottom: paddingBottom },
});
