import React from "react";
import Lottie from "lottie-react-native";
import { Colors } from "../../assets/Colors";
import { StyleSheet, View } from "react-native";
import { DimensionsUtils } from "../utils/DimensionsUtils";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Lottie
        loop
        autoPlay
        style={styles.lottie}
        source={require("../../assets/lottie/loading.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: DimensionsUtils.getDP(12),
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    width: DimensionsUtils.getDP(110),
    height: DimensionsUtils.getDP(110),
  },
  lottie: {
    width: DimensionsUtils.getDP(100),
    height: DimensionsUtils.getDP(100),
  },
});

export default Loading;
