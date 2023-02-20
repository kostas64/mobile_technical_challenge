import React from "react";
import Loading from "./Loading";
import { useQuery } from "@apollo/client";
import { Colors } from "../../assets/Colors";
import CitiesListItem from "./CitiesListItem";
import dict from "../../assets/dictionary.json";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import { GET_ALL_CITIES, GET_ALL_PLACES } from "../services";
import { Text, FlatList, StyleSheet, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Cities = () => {
  const {
    loading: loadingCt,
    error: errorCt,
    data: cities,
  } = useQuery(GET_ALL_CITIES);

  const {
    loading: loadingPl,
    error: errorPl,
    data: places,
  } = useQuery(GET_ALL_PLACES);

  const renderItem = ({ item, index }) => (
    <CitiesListItem
      key={index}
      cities={cities}
      index={index}
      item={item}
      places={places}
    />
  );

  return !loadingCt && !loadingPl ? (
    <>
      <Text style={styles.title}>{dict?.citiesSectionTitle}</Text>
      <FlatList
        data={cities?.allCities}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.key}
      />
    </>
  ) : (
    <View style={styles.loadingContainer}>
      <Loading />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.black,
    fontSize: DimensionsUtils.getFontSize(18),
    fontFamily: "Montserrat-SemiBold",
    paddingTop: DimensionsUtils.getDP(16),
    paddingHorizontal: DimensionsUtils.getDP(16),
  },
  loadingContainer: {
    position: "absolute",
    top: (height - DimensionsUtils.getDP(120)) / 2,
    left: (width - DimensionsUtils.getDP(110)) / 2,
  },
});

export default Cities;
