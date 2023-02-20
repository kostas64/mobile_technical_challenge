import React from "react";
import dict from "../../assets/dictionary.json";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import ImageWithButton from "../components/ImageWIthButton";
import CityTagsContainer from "../components/CityTagsContainer";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CityThingsContainer from "../components/CityThingsContainer";

const CityScreen = ({ route }) => {
  const { city, places } = route?.params;
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        {
          paddingBottom:
            insets.bottom > 0 ? insets.bottom + 4 : DimensionsUtils.getDP(24),
        },
      ]}
    >
      <ImageWithButton city={city} />
      <CityTagsContainer city={city} />
      <Text style={styles.thingsTitle}>{dict?.thingsLabel}</Text>
      <View style={styles.thingsContainer}>
        <CityThingsContainer city={city} places={places} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingHorizontal: DimensionsUtils.getDP(8),
  },
  thingsContainer: {
    paddingHorizontal: DimensionsUtils.getDP(12),
    paddingTop: DimensionsUtils.getDP(8),
  },
  thingsTitle: {
    color: "black",
    fontFamily: "Montserrat-Bold",
    fontSize: DimensionsUtils.getFontSize(18),
    marginTop: DimensionsUtils.getDP(24),
    marginBottom: DimensionsUtils.getDP(12),
    paddingHorizontal: DimensionsUtils.getDP(8),
  },
});

export default CityScreen;
