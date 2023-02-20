import React from "react";
import { THINGS } from "../../assets/Things";
import CityThingsItem from "./CityThingsItem";
import { StyleSheet, View } from "react-native";
import { DimensionsUtils } from "../utils/DimensionsUtils";

const CityThingsContainer = ({ places, city }) => {
  const filterPlaces = (item) =>
    places?.allPlaces?.filter(
      (place) => place?.key === city?.key && item.key === place?.place?.type
    );

  return THINGS?.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <CityThingsItem
          label={item.label}
          itemImage={item.itemImage}
          places={filterPlaces(item)}
        />
        {index !== THINGS.length - 1 && <View style={styles.spacer} />}
      </React.Fragment>
    );
  });
};

const styles = StyleSheet.create({
  spacer: {
    marginVertical: DimensionsUtils.getDP(12),
  },
});

export default CityThingsContainer;
