import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Switch = () => {
  const [leftIsSelected, setLeftIsSelected] = useState(true);
  const [rightIsSelected, setRightIsSelected] = useState(false);
  function Week() {
    setRightIsSelected(true);
    setLeftIsSelected(false);
  }
  function Day() {
    setLeftIsSelected(true);
    setRightIsSelected(false);
  }
  return (
    <View style={styles.root}>
      <View
        style={leftIsSelected ? styles.titleContainer : styles.nullContainer}
      >
        <Text onPress={Day} style={styles.title}>
          Day
        </Text>
      </View>
      <View
        style={rightIsSelected ? styles.titleContainer : styles.nullContainer}
      >
        <Text onPress={Week} style={styles.title}>
          Week
        </Text>
      </View>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  root: {
    height: 44,
    width: Dimensions.get("window").width * 0.7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9E9FF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  titleContainer: {
    backgroundColor: "white",
    height: 36,
    width: (Dimensions.get("window").width * 0.7) / 2.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  nullContainer: {
    width: (Dimensions.get("window").width * 0.7) / 2.1,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "rubik_Regular",
    fontSize: 16,
  },
});
