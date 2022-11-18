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
import ProgressCircle from "../components/TimerComponents/ProgressCircle";

const Timer = () => {
  return (
    <View style={styles.root}>
      <View style={{flex:2, alignItems:'center',justifyContent:'center'}}>
        <Header/>
      </View>
      <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
        <Title/>
      </View>
      <View style={{alignItems:'center', justifyContent:'center', flex:5, backgroundColor:'violet'}}>
        <ProgressCircle />
      </View>
      <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
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
