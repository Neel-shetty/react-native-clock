import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/sharedComponents/Header";
import Card from "../components/reportscreenComponents/Card";
import Graph from "../components/reportscreenComponents/Graph";
import Switch from "../components/reportscreenComponents/Switch";

const ReportScreen = () => {
  return (
    <View style={styles.root}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Header title={"Report"} />
      </View>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.cardContainer}>
          <Card />
          <Card />
        </View>
        <View style={{paddingVertical:20}}>
          <Switch />
        </View>
      </View>
      <View style={{ flex: 4, alignItems: "center", justifyContent: "flex-start" }}>
        <Graph />
      </View>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
  },
});
