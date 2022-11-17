import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskListItem from "./TaskListItem";
// import task from "../../../../assets/dummyData/taskData";

const TaskList = () => {
  const task = [
    {
      key: 1,
      title: "UI Design",
      tags: ["Work", "React Project"],
      icon: "work",
      timer: "00.45.24",
    },
    {
      key: 2,
      title: "100 Push ups",
      tags: ["Personal", "Workout"],
      icon: "gym",
      timer: "00.45.24",
    },
  ];
  //console.log(task);

  return (
    <View style={{ height: 300 }}>
      <FlatList
        data={task}
        renderItem={({ item }) => <TaskListItem data={item} />}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
