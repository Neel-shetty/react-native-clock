import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const CustomInput = ({ label }) => {
  return (
    <View style={styles.root}>
      <View>
        {label === "Goal" ? (
          <FontAwesome5 name="tasks" size={24} color="#667085" />
        ) : null}
        {label === "Category" ? (
          <SimpleLineIcons name="drawer" size={24} color="#667085" />
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter here"
          placeholderTextColor={"#667085"}
          style={styles.input}
        />
      </View>
      <View>
        <Ionicons name="information-circle" size={24} color="#667085" />
      </View>
    </View>
  );
};

export default CustomInput;

const width = Dimensions.get("window").width * 0.55;

const styles = StyleSheet.create({
  root: {
    height: 40,
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor:'violet',
    width: width,
  },
  input: {
    width: width,
  },
});
