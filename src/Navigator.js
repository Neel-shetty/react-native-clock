import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import TabBar from "./components/sharedComponents/TabBar";

const Tabs = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator >
        <Tabs.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
