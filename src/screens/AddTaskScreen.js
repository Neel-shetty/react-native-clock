import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/sharedComponents/Header";
import Form from "../components/AddTaskComponents/Form";
import PrimaryButton from "../components/ui/PrimaryButton";

const AddTaskScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        // backgroundColor:'#FAFAFF'
      }}
    >
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Header title={"Add Task"} />
      </View>
      <View style={{ flex: 4 }}>
        <Form />
      </View>
      <View style={{ flex: 3 }} />
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({});
