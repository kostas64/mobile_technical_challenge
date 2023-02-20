import React from "react";
import { Colors } from "../../assets/Colors";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import { View, Text, StyleSheet, Image } from "react-native";

const CityTag = ({ label, source, imageStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.imageContainer}>
        <Image style={imageStyle} source={source} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DimensionsUtils.getDP(140),
    backgroundColor: Colors.veryLightGrey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: DimensionsUtils.getDP(8),
    paddingHorizontal: DimensionsUtils.getDP(8),
    paddingVertical: DimensionsUtils.getDP(6),
  },
  label: {
    color: Colors.black,
    fontSize: DimensionsUtils.getFontSize(14),
    fontFamily: "Montserrat-Regular",
  },
  imageContainer: {
    width: DimensionsUtils.getDP(40),
    justifyContent: "center",
    alignItems: "center",
    height: DimensionsUtils.getDP(40),
    padding: DimensionsUtils.getDP(4),
    backgroundColor: Colors.white,
    borderRadius: DimensionsUtils.getDP(8),
  },
});

export default CityTag;
