import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

const Header = ({ title }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity>
        <Svg
          width={24}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
            fill="#828282"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    height: 55,
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "rubikMedium",
    fontSize: 24,
  },
});
