import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const SecondaryButton = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Text style={styles.title}>Quit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  root: {
    height: 60,
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor:'#E9E9FF',
    borderRadius: 10,
    //borderWidth:2,
    //borderColor:'#E9E9FF'
  },
  title: {
    fontFamily: "rubik_Regular",
    fontSize: 18,
    color: "#070417",
  },
});
