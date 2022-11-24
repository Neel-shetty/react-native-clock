import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import Controls from "./Controls";

const { width, height } = Dimensions.get("window");

const CIRCLE_LENGTH = 700;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const ProgressCircle = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [time, setTime] = useState(0);

  const progress = useSharedValue(0);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  useEffect(() => {
    progress.value = withTiming(1, { duration: 12000 });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const ProgressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  function start() {
    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);
  }
  // useEffect(() => {
  //   setIsStopwatchStart(!isStopwatchStart);
  //   setResetStopwatch(false);
  // });
	// test:w

  function Countdown() {
    return (
      <View style={{ height: 200, justifyContent: "flex-end" }}>
  
        <View>
          <Controls onPressFinish={start} />
        </View>
      </View>
    );
  }
  const options = {
    container: {
   // width: 100,
   // backgroundColor: 'red'
    },
    text: {
    fontFamily: "rubik_Bold",
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    //top: 60,
    textAlignVertical: "center",
    },
  };
	function counter() {
console.log("123...")
	}

  return (
    <View style={styles.root}>
      <ReText style={styles.time} text={ProgressText} />
      {/* <View style={{position:'absolute',alignItems:'center', justifyContent:'center'}}> */}
      <Svg style={{ position: "absolute", alignSelf: "center", bottom: 0 }}>
        <Circle
          cx={width / 2}
          cy={height / 5.5}
          r={R}
          stroke="#E9E9FF"
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 5.5}
          r={R}
          stroke="url(#a)"
          strokeWidth={30}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={"round"}
          // rotation={10}
        />
        <Defs>
          <RadialGradient
            id="a"
            cx={0}
            cy={0}
            r={1.1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(132.769 230.19 90.563) scale(600.3466)"
          >
            <Stop stopColor="#fff" />
            <Stop offset={1} stopColor="#7012CE" />
          </RadialGradient>
        </Defs>
      </Svg>

      <View style={{ height: 200, justifyContent: "flex-end" }}>
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
            // setTime(time);
	    time = time.split(':')
            const formattedTime = (time[1],time[2],time[3]);
		  return (
                  <View>
<Text>{formattedTime}</Text>
			  </View>
		  )
          }}
        />
        <View>
          <Controls onPressFinish={start} />
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

export default ProgressCircle;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    // height: height / 3,
    // minHeight: 300,
    width: width,
    // backgroundColor: "pink",
    flex: 1,
  },
  time: {
    fontFamily: "rubik_Bold",
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    //top: 60,
    textAlignVertical: "center",
  },
});
