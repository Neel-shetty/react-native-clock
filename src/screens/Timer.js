import { StyleSheet, Text, View } from "react-native";
import React,{useRef} from "react";
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
import Controls from "../components/TimerComponents/Controls";
import {Timer as Time,Countdown} from 'react-native-element-timer';

const Timer = () => {
  const timerRef = useRef(null);
  const countdownRef = useRef(null);
  //console.log(props)
  console.log(timerRef, countdownRef)
  
  return (
    <View style={styles.root}>
      <View style={{flex:2, alignItems:'center',justifyContent:'center'}}>
        <Header/>
      </View>
      <View style={{flex:1, alignItems:'center', justifyContent:'flex-start'}}>
        <Title/>                
      </View>
      <View style={{alignItems:'center', justifyContent:'center', flex:5}}>
        <ProgressCircle />
      </View>
      <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
        <Controls />
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
    backgroundColor:'white'
  },
});
