import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import Svg from "react-native-svg";

const Graph = () => {
  return (
    <View style={styles.root}>
      <LineChart
        data={{
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [
                Math.random() * 16,  
                Math.random() * 16,  
                Math.random() * 16,  
                Math.random() * 16,  
                Math.random() * 16,  
                Math.random() * 16,  
                Math.random() * 16,  
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.9} // from react-native
        height={310}
        // yAxisLabel="$"
        yAxisSuffix=" h"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(128, 18, 206, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, 0.4)`,
          // propsForLabel:'',
          style: {
            borderRadius: 16,
            
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#7012CE",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  root: {
    height: 320,
    width: Dimensions.get("window").width * 0.9,
    // padding: 20,
  },
});
