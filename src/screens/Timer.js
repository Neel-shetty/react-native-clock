import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/TimerComponents/Header";
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop,
  Path,
} from "react-native-svg";
import Title from "../components/TimerComponents/Title";

const Timer = () => {
  return (
    <View style={styles.root}>
      <Header />
      <Title />
      <View>
        <Text>CIRCLE PROGRESS</Text>
      </View>
      <View>
        <Text>PLAY PAUSE</Text>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
