import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { DimensionsUtils } from "../utils/DimensionsUtils";

const BackButton = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/right-arrow.png")}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: DimensionsUtils.getDP(28),
    height: DimensionsUtils.getDP(28),
    borderRadius: DimensionsUtils.getDP(16),
  },
  icon: {
    transform: [{ rotate: "180deg" }],
    width: DimensionsUtils.getDP(14),
    height: DimensionsUtils.getDP(14),
  },
});

export default BackButton;
