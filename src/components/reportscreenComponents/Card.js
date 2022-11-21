import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Card = ({title}) => {
	const w1 = title.split(" ")[0]
	//console.log(w1)
	const w2 = title.split(" ")[1]
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={[styles.iconContainer,(title==="Time Duration" && {backgroundColor:"violet"})]}>
	  {title==="Tasks Completed" &&<Ionicons name="checkmark" size={24} color="black" />}
	  {title==="Time Duration" &&<Ionicons name="time-outline" size={24} color="black" />}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{w1}</Text>
          <Text style={styles.title}>{w2}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
	  {title === "Tasks Completed" &&<Text style={styles.counter}>12</Text>}
	  {title === "Time Duration" &&<Text style={styles.counter}>15h 24m</Text>}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    height: 132,
    width: Dimensions.get("window").width / 2.5,
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 16,
    marginHorizontal:10
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 10,
    paddingLeft: 30
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#07E092",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "rubik_Regular",
    fontSize: 16,
  },
  titleContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  bottomContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 30,
   // backgroundColor: "pink"
  },
  counter: {
    fontFamily: "rubik_Medium",
    fontSize: 32,
  },
});
