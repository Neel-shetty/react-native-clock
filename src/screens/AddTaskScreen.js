import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/sharedComponents/Header";
import Form from "../components/AddTaskComponents/Form";
import DropMenu from "../components/ui/DropMenu";

const AddTaskScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header title={"Add Task"} />
      <Form label={"Goal"} />
      <Form label={"Category"} />
      <DropMenu />
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({});
