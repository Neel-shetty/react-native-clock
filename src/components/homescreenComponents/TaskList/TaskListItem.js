import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

const TaskListItem = () => {
  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <View style={styles.circle}>
          <MaterialIcons name="computer" size={24} color="white" />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text>TITLE</Text>
        </View>
        <View>
          <Text>TAGS</Text>
        </View>
      </View>
      <View style={styles.playContainer}>
        <Text>00.42.21</Text>
        <Text>PLAY</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  circle: {
    width:44,
    height:44,
    backgroundColor:'#9B51E0',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
