import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop,
  Path,
} from "react-native-svg";

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.Circle}>
        <Svg
          width={12}
          height={12}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle cx={6} cy={6} r={5.3} stroke="url(#a)" strokeWidth={1.4} />
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
      <Text style={styles.text}>UI Design</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
  },
  Circle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "rubik_Medium",
    paddingHorizontal: 10,
    color: "#828282",
  },
});
