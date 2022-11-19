import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/sharedComponents/Header";

const AddTaskScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header />
      <CustomInput />
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({});
