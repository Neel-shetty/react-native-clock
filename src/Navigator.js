import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import ReportScreen from "./screens/ReportScreen";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Timer from "./screens/Timer";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Timer"
        component={Timer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              // bottom:25,
              height: 90,
              borderTopEndRadius: 35,
              borderTopStartRadius: 35,
            },
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "time" : "time-outline"}
                size={24}
                color="#828282"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="StackScreens"
          component={StackScreens}
          options={{
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
            tabBarIcon: ({ focused }) => (
              <Ionicons name="add-circle" size={49} color="black" />
            ),
          }}
        />
        <Tabs.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              // bottom:25,
              height: 90,
              borderTopEndRadius: 35,
              borderTopStartRadius: 35,
            },
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "pie-chart" : "pie-chart-outline"}
                size={24}
                color="#828282"
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
