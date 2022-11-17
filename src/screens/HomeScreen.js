import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import TimerCard from "../components/homescreenComponents/TimerCard";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import ListHeader from "../components/homescreenComponents/ListHeader";
import TaskList from "../components/homescreenComponents/TaskList/TaskList";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    rubik_Medium: require("../../assets/fonts/static/Rubik-Medium.ttf"),
    rubik_Regular: require("../../assets/fonts/static/Rubik-Regular.ttf"),
    rubik_Bold: require('../../assets/fonts/static/Rubik-Bold.ttf')
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
      <ListHeader title={'Today'}/>
      <TaskList />
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
