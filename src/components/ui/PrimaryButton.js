import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const PrimaryButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.root}>
        <Text style={styles.title}>Finish</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  root: {
    height: 60,
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9E9FF",
    borderRadius: 10,
  },
  title: {
    fontFamily: "rubik_Medium",
    fontSize: 18,
  },
});
