import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const ListHeader = ({ title }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.text2}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  root: {
    height: 55,
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "rubik_Medium",
    fontSize: 20,    
    color: '#070417'
  },
  text2: {
    fontFamily: 'rubik_Regular',
    fontSize: 16,
    color: '#070417'

  }
});
