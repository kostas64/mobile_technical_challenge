import React from "react";
import CityTag from "./CityTag";
import { flags } from "../../assets/Flags";
import { Colors } from "../../assets/Colors";
import { StyleSheet, View } from "react-native";
import dict from "../../assets/dictionary.json";
import { currencies } from "../../assets/Currencies";
import { DimensionsUtils } from "../utils/DimensionsUtils";

const CityTagsContainer = ({ city }) => {
  return (
    <View style={styles.tagsContainer}>
      <CityTag
        label={dict?.cityTagLang}
        imageStyle={styles.langImage}
        source={flags[!!city?.language ? city?.language : "multi"]}
      />
      <View style={styles.spacer} />
      <CityTag
        label={dict?.cityTagCur}
        imageStyle={styles.currencyImage}
        source={currencies[city?.key]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: DimensionsUtils.getDP(24),
    marginLeft: DimensionsUtils.getDP(4),
  },
  cityName: {
    color: Colors.black,
    fontFamily: "Montserrat-Medium",
    fontSize: DimensionsUtils.getFontSize(18),
  },
  nativeName: {
    color: Colors.grey,
    fontFamily: "Montserrat-Regular",
    fontSize: DimensionsUtils.getFontSize(16),
  },
  langImage: {
    width: DimensionsUtils.getDP(32),
    height: DimensionsUtils.getDP(32),
  },
  currencyImage: {
    width: DimensionsUtils.getDP(22),
    height: DimensionsUtils.getDP(22),
  },
  spacer: {
    marginRight: DimensionsUtils.getDP(8),
  },
});

export default CityTagsContainer;
