import React from "react";
import MapView, { Marker } from "react-native-maps";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const CityThingsMapItem = ({ place, isLast }) => {
  return (
    <View style={!isLast && styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.bullet}>{`\u2B24`}</Text>
        <Text style={styles.itemName}>{`  ${place?.name}`}</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: place?.coordinates?.[0],
            longitude: place?.coordinates?.[1],
            latitudeDelta: 0.02,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: place?.coordinates?.[0],
              longitude: place?.coordinates?.[1],
            }}
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: DimensionsUtils.getDP(16),
  },
  bullet: {
    color: "black",
    fontSize: DimensionsUtils.getFontSize(10),
  },
  itemName: {
    color: "black",
    fontFamily: "Montserrat-Medium",
    fontSize: DimensionsUtils.getFontSize(14),
    marginBottom: DimensionsUtils.getDP(8),
  },
  mapContainer: {
    backgroundColor: "white",
    padding: DimensionsUtils.getDP(6),
  },
  map: {
    width: width - DimensionsUtils.getDP(86),
    height: DimensionsUtils.getDP(120),
  },
});

export default CityThingsMapItem;
