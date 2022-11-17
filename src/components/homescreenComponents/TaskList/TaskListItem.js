import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Tags from "../../sharedComponents/Tags";

const TaskListItem = () => {
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <MaterialIcons name="computer" size={27} color="white" />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>UI Design</Text>
        </View>
        <View style={styles.tagContainer}>
          <Tags title={"Work"} color={'#FD5B71'} bgColor={'#FFEFF1'} />
          <Tags title={"React Project"} color={'#9B51E0'} bgColor={'#F5EEFC'} />
        </View>
      </View>
      <View style={styles.playContainer}>
        <View style={styles.timeContainer}>
          <Text style={styles.timer}>00.42.21</Text>
        </View>
        <View style={styles.playIconContainer}>
          <Ionicons name="play" size={27} color="#828282" />
        </View>
      </View>
    </View>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  root: {
    height: 85,
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginVertical: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  circle: {
    width: 44,
    height: 44,
    backgroundColor: "#9B51E0",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "flex-start",
    //backgroundColor: "pink",
    flex: 2.5,
  },
  tagContainer:{
    flexDirection:'row'
  },
  title: {
    fontFamily: "rubik_Medium",
  },
  playContainer: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
    MarginVertical: 5,
  },
  timer: {
    fontFamily: "rubik_Regular",
    fontSize: 12,
    color: "#828282",
  },
  timeContainer: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  playIconContainer: {
    flex: 1,
    //MarginBottom:10,
    alignContent: "center",
    justifyContent: "center",
  },
});
