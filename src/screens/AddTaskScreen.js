import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/sharedComponents/Header";
import Form from "../components/AddTaskComponents/Form";

const AddTaskScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header title={'Add Task'} />
      <Form/>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({});
