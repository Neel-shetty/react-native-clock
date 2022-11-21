import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/sharedComponents/Header";
import TimerCard from "../components/homescreenComponents/TimerCard";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import ListHeader from "../components/homescreenComponents/ListHeader";
import TaskList from "../components/homescreenComponents/TaskList/TaskList";
import { Timer, Countdown } from "react-native-element-timer";
import { Stopwatch, Timer as Time } from "react-native-stopwatch-timer";

const HomeScreen = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

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

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.flex1}>
      <View style={styles.top}>
        <Header title={"Task"} />
        <TimerCard />
        <View>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            //To start
            reset={resetStopwatch}
            //To reset
            options={options}
            //options for the styling
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}
          >
            <Text style={styles.buttonText}>
              {!isStopwatchStart ? "START" : "STOP"}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}
          >
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
          <Text>Test hi</Text>
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
    paddingTop: 20,
    // paddingBottom:10,
    // backgroundColor:'pink',
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    flex: 4,
    // backgroundColor:'violet',
    // width: Dimensions.get('window').width
  },
});

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
