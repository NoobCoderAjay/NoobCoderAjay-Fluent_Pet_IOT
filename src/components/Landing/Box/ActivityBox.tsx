// import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// import CircularProgress from 'react-native-circular-progress-indicator';

//@ts-ignore
import Calendar from "../../../assets/images/newImages/Calendar.png";
//@ts-ignore
import Cap from "../../../assets/images/newImages/Cap.png";
//@ts-ignore
import Completed from "../../../assets/images/newImages/Completed.png";
//@ts-ignore
import Quize from "../../../assets/images/newImages/Quize.png";
import { FontArizona } from "src/components/common/Typography";

type Props = {};

const ActivityBox = (_props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.row}>
          <Image source={Cap} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>X / 8</Text>
            <Text style={styles.subText}>Courses Past</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={Calendar} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>X/ 40</Text>
            <Text style={styles.subText}>Lessons Complete</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Image source={Quize} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>X / 40</Text>
            <Text style={styles.subText}>Quizzes Completed</Text>
          </View>
        </View>
      </View>
      <Image source={Completed} />
      {/* <CircularProgress
        value={23}
        activeStrokeColor="#006271"
        inActiveStrokeColor="#F0FAFD"
        valueSuffix={'%'}
        maxValue={100}
        radius={60}
        progressValueColor={'#006271'}
        // titleColor="#006271"
      ></CircularProgress> */}
      {/* <View style={styles.iconContainer}>
        <AntDesign name="arrowright" size={24} color="#006271" />
      </View> */}
    </View>
  );
};

export default ActivityBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#0062718A",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 15,
    position: "relative",
    paddingTop: 40,
  },
  leftContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 10,
  },
  text: {
    fontFamily: FontArizona.BOLD,
    fontSize: 16,
    color: "#006271",
  },
  subText: {
    fontFamily: FontArizona.BOLD,
    fontSize: 12,
    color: "#666666",
  },
  image: {
    width: 30,
    height: 30,
  },
  // iconContainer: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 15,
  // },
  // progressBar: {
  //   height: 200,
  // },
});
