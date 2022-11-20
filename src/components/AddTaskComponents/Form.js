import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../ui/CustomInput";
import DropMenu from "../ui/DropMenu";

const Form = ({ label, showLabel }) => {
  return (
    <View style={styles.root}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <CustomInput label={label} />
      {/* <DropMenu /> */}
    </View>
  );
};

export default Form;

const width = Dimensions.get("window").width * 0.9;

const styles = StyleSheet.create({
  root: {
    height: 100,
    backgroundColor: "#E9E9FF",
    width: width,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginVertical: 10,
  },
  label: {
    fontFamily: "rubik_Medium",
    fontSize: 16,
  },
  labelContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: width,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
});
