import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Tags from "../sharedComponents/Tags";

const Header = () => {
  return (
    <View style={styles.root}>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={styles.title}>React Project</Text>
      <Tags title={'Work'} color={'red'} bgColor={'pink'} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title:{
    fontFamily:'rubik_Medium',
    fontSize:24
  },
  root:{
    width:Dimensions.get('window').width * 0.9,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
  }
});
