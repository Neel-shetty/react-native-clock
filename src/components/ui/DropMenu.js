import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

const data = [
  { label: "Personal", value: "1" },
  { label: "Work", value: "2" },
  { label: "Academic", value: "3" },
  { label: "Fitness", value: "4" },
  { label: "none", value: "5" },
  // { label: "Item 6", value: "6" },
  // { label: "Item 7", value: "7" },
  // { label: "Item 8", value: "8" },
];

const DropMenu = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>Tags</Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tags</Text>
      </View>
      {/* {renderLabel()} */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "#E9E9FF" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select tag" : "..."}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        containerStyle={{ backgroundColor: "white", borderRadius: 10 }}
        fontFamily={"rubik_Regular"}
        itemContainerStyle={{
          backgroundColor: "#E9E9FF",
          margin: 5,
          borderRadius: 5,
        }}
        activeColor={"#D0D0FF"}
        dropdownPosition={"bottom"}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DropMenu;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#E9E9FF",
    // backgroundColor: "white",
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginVertical: 10,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get("window").width * 0.8,
    paddingHorizontal: 10,
    borderColor: "#D0D5DD",
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 16,
    fontFamily: "rubik_Medium",
    // padding:10
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#667085",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "violet",
    width: width * 0.9,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
});
