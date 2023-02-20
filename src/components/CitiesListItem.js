import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { images } from "../../Images";
import { LikeButton } from "./LikeButton";
import { Colors } from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import { DimensionsUtils } from "../utils/DimensionsUtils";

const { width: WIDTH } = Dimensions.get("window");

const CitiesListItem = ({ index, cities, item, places }) => {
  const navigation = useNavigation();

  const goToCity = (item) =>
    navigation.navigate("City", {
      city: item,
      places,
    });

  return (
    <>
      <Pressable
        onPress={() => goToCity(item)}
        style={[
          styles.itemContainer,
          index === cities?.allCities.length - 1 && {
            marginBottom: DimensionsUtils.getDP(32),
          },
        ]}
      >
        <Image source={images[item?.key]} style={styles.image} />
        <Text style={styles.cityName}>{item.name}</Text>
        <View style={styles.footer}>
          <Text style={styles.nativeName}>{item.nativeName}</Text>
          <Image
            source={require("../../assets/icons/right-arrow.png")}
            style={styles.navIcon}
          />
        </View>
      </Pressable>
      <LikeButton style={styles.likeButton} />
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    zIndex: 1,
    height: DimensionsUtils.getDP(180),
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    marginHorizontal: 16,
    marginVertical: DimensionsUtils.getDP(8),
    borderRadius: DimensionsUtils.getDP(8),
  },
  image: {
    borderTopLeftRadius: DimensionsUtils.getDP(8),
    borderTopRightRadius: DimensionsUtils.getDP(8),
    width: WIDTH - 34,
    height: DimensionsUtils.getDP(128),
  },
  likeButton: {
    top: DimensionsUtils.getDP(7),
    right: DimensionsUtils.getDP(6),
    height: DimensionsUtils.getIconSize(18),
    width: DimensionsUtils.getIconSize(18),
  },
  cityName: {
    color: Colors.black,
    fontFamily: "Montserrat-SemiBold",
    fontSize: DimensionsUtils.getFontSize(14),
    marginTop: DimensionsUtils.getDP(8),
    marginLeft: DimensionsUtils.getDP(12),
  },
  nativeName: {
    fontSize: DimensionsUtils.getFontSize(12),
    fontFamily: "Montserrat-Medium",
    marginLeft: DimensionsUtils.getDP(12),
    color: Colors.grey,
  },
  navIcon: {
    alignSelf: "flex-end",
    width: DimensionsUtils.getDP(12),
    height: DimensionsUtils.getDP(12),
    marginRight: DimensionsUtils.getDP(12),
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CitiesListItem;
