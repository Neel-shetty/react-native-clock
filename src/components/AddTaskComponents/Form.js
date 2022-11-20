import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputBox from "./InputBox";
import DropMenu from "../ui/DropMenu";
import PrimaryButton from "../ui/PrimaryButton";

const Form = () => {
  return (
    <View>
      <View>
        <InputBox label={"Goal"} />
      </View>
      <View>
        <InputBox label={"Category"} />
      </View>
      <View>
        <DropMenu />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <PrimaryButton title={'Add Task'} />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
