import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import TimerCard from "../components/homescreenComponents/TimerCard";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    rubikMedium: require("../../assets/fonts/static/Rubik-Medium.ttf"),
    rubikRegular: require("../../assets/fonts/static/Rubik-Regular.ttf")
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
    <View onLayout={onLayoutRootView} style={styles.flex1}>
      <Header title={"Task"} />
      <TimerCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
