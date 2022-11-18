import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ReText } from "react-native-redash";

const { width, height } = Dimensions.get("window");

const CIRCLE_LENGTH = 700;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const ProgressCircle = () => {
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

  return (
    <View style={styles.root}>
      <ReText style={styles.time} text={ProgressText} />
      {/* <View style={{position:'absolute',alignItems:'center', justifyContent:'center'}}> */}
      <Svg
        style={{ position: "absolute", alignSelf: "center"}}
      >
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
      {/* </View> */}
    </View>
  );
};

export default ProgressCircle;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    height: height / 3,
    minHeight: 300,
    width: width,
    //backgroundColor: "pink",
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
