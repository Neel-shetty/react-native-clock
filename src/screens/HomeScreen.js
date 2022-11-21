import { Dimensions, SafeAreaView, StyleSheet, Text, View , Button} from "react-native";
import React, { useCallback, useEffect,useRef ,useState} from "react";
import Header from "../components/sharedComponents/Header";
import TimerCard from "../components/homescreenComponents/TimerCard";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import ListHeader from "../components/homescreenComponents/ListHeader";
import TaskList from "../components/homescreenComponents/TaskList/TaskList";
import {Timer, Countdown} from 'react-native-element-timer';
import { Stopwatch, Timer as Time } from 'react-native-stopwatch-timer'


const HomeScreen = () => {
  const [timerStart, setTimer] = useState()
  const [stopwatchStart, setStopwatchStart] = useState()
  const [totalDuration, setTotalDuration] = useState()
  const [timerReset, setTimerReset] = useState()
  const [stopwatchReset, setStopwatchReset] = useState()

  const [fontsLoaded] = useFonts({
    rubik_Medium: require("../../assets/fonts/static/Rubik-Medium.ttf"),
    rubik_Regular: require("../../assets/fonts/static/Rubik-Regular.ttf"),
    rubik_Bold: require("../../assets/fonts/static/Rubik-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  function toggleTimer(){
  setTimer(true)
  setResetTimer(false)
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.flex1}>
      <View style={styles.top}>
        <Header title={"Task"} />
        <TimerCard />
	  <View>
            <Text>
              Test
	      hi
	    </Text>
	 </View> 
      </View>
      <View style={styles.bottom}>
        <ListHeader title={"Today"} />
        <TaskList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 2,
    paddingTop:20,
    // paddingBottom:10,
    // backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center'
  },
  bottom: {
    flex: 4,
    // backgroundColor:'violet',
    // width: Dimensions.get('window').width
  },
});
