import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/sharedComponents/Header";

const HomeScreen = () => {
  return (
    <View style={styles.flex1}>
      <Header />
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
