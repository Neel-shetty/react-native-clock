import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Tags from "../../sharedComponents/Tags";
import { FontAwesome5 } from "@expo/vector-icons";

const TaskListItem = ({ data }) => {
  //console.log(data)
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.circle,
            data.icon === "work" && { backgroundColor: "#9B51E0" },
            data.icon === "gym" && { backgroundColor: "#FFA656" },
          ]}
        >
          {data.icon === "work" && (
            <MaterialIcons name="computer" size={27} color="white" />
          )}
          {data.icon === "gym" && (
            <FontAwesome5 name="dumbbell" size={24} color="white" />
          )}
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.tagContainer}>
          <Tags
            title={data.tags[0]}
            color={
              (data.icon === "work" ? "#FD5B71" : null) ||
              (data.icon === "gym" ? "#828282" : null)
            }
            bgColor={
              (data.icon === "work" ? "#FFEFF1" : null) ||
              (data.icon === "gym" ? "#F2F2F2" : null)
            }
          />
          <Tags
            title={data.tags[1]}
            color={
              (data.icon === "work" ? "#9B51E0" : null) ||
              (data.icon === "gym" ? "#FFA656" : null)
            }
            bgColor={
              (data.icon === "work" ? "#F5EEFC" : null) ||
              (data.icon === "gym" ? "#FEF5ED" : null)
            }
          />
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
    marginVertical: 10,
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
  tagContainer: {
    flexDirection: "row",
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
