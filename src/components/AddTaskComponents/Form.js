import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../ui/CustomInput";

const Form = () => {
  return (
    <View style={styles.root}>
      <CustomInput />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  root: {
    height: 114,
    backgroundColor: "pink",
    width: Dimensions.get('window').width * 0.9,
    alignItems:'center',
    justifyContent:'center'
  },
});
