import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tags = ({title,color,bgColor}) => {
  var textColor = color
  return (
    <View style={[styles.root, {backgroundColor:bgColor}]}>
      <Text style={[styles.title,{color:textColor}]}>{title}</Text>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  root: {
    height: 24,
    backgroundColor: "#FFEFF1",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:5
  },
  title: {
    paddingHorizontal: 7.5,
    fontFamily:'rubik_Regular',
    fontSize:12,
    color: '#FD5B71'
  },
});
