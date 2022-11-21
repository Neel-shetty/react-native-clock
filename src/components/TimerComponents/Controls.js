import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import ProgressCircle, { animateCircle } from "./ProgressCircle";
import { useSharedValue, withTiming } from "react-native-reanimated";
import {useNavigation} from "@react-navigation/native"

const Controls = ({onPressFinish}) => {
  const navigation = useNavigation()
  function back(){
  navigation.navigate("HomeScreen")
  }
  return (
    <View>
      <View style={{ padding: 10 }}>
        <PrimaryButton onPress={onPressFinish} title={'Finish'} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <SecondaryButton onPress={back}/>
      </View>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({});
