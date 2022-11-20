import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop,
  Path,
} from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const TimerCard = () => {
  const navigation = useNavigation();
  function TimerScreen() {
    navigation.navigate("StackScreens", { screen: "Timer" });
    let syed = 'gay'
  }

  console.log
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <View>
          <View>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>00.39.20</Text>
            </View>
            <View style={styles.titleContainer}>
              <View style={styles.Circle}>
                <Svg
                  width={12}
                  height={12}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Circle
                    cx={6}
                    cy={6}
                    r={5.3}
                    stroke="url(#a)"
                    strokeWidth={1.4}
                  />
                  <Defs>
                    <RadialGradient
                      id="a"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="rotate(132.769 8.19 4.563) scale(16.3466)"
                    >
                      <Stop stopColor="#fff" />
                      <Stop offset={1} stopColor="#7012CE" />
                    </RadialGradient>
                  </Defs>
                </Svg>
              </View>
              <Text style={styles.title}>React Project</Text>
            </View>
          </View>
        </View>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={TimerScreen}>
            <Svg
              width={24}
              height={24}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M15.5 11.2 9.8 5.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.9 5-4.9 5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5.7-5.6c.4-.5.4-1.1 0-1.6 0 .1 0 .1 0 0Z"
                fill="#fff"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TimerCard;

const styles = StyleSheet.create({
  root: {
    height: 115,
    width: Dimensions.get("window").width * 0.9,
  },
  card: {
    backgroundColor: "#070417",
    height: 114,
    width: Dimensions.get("window").width * 0.9,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 15,
  },
  time: {
    fontFamily: "rubik_Medium",
    fontSize: 32,
    color: "white",
  },
  timeContainer: {
    alignItems: "flex-start",
    paddingLeft: 15,
    padding: 10,
  },
  titleContainer: {
    alignItems: "flex-start",
    paddingLeft: 15,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
  },
  title: {
    color: "white",
    paddingLeft: 10,
    fontFamily: "rubik_Regular",
    fontSize: 16,
  },
  arrowContainer: {
    alignItems: "flex-start",
    padding: 20,
    justifyContent: "flex-end",
  },
  Circle: {
    alignSelf: "center",
  },
});
