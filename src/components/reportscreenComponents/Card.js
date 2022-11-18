import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark" size={24} color="black" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tasks</Text>
          <Text style={styles.title}>Completed</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.counter}>12</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    height: 132,
    width: Dimensions.get("window").width / 2.5,
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 16,
    marginHorizontal:10
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#07E092",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "rubik_Regular",
    fontSize: 16,
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  bottomContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 16,
  },
  counter: {
    fontFamily: "rubik_Medium",
    fontSize: 32,
  },
});
