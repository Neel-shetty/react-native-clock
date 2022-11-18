import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

const Controls = () => {
  return (
    <View>
      <View style={{ padding: 10 }}>
        <PrimaryButton />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <SecondaryButton />
      </View>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({});
