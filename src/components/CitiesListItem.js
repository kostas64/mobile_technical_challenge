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
import Animated from "react-native-reanimated";
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
        <Animated.Image
          resizeMode="cover"
          sharedTransitionTag={`img-${item.key}`}
          source={images[item?.key]}
          style={styles.image}
        />

        <View style={styles.footer}>
          <View>
            <Text
              sharedTransitionTag={`title-${item.key}`}
              style={styles.cityName}
            >
              {item.name}
            </Text>
            <Text
              sharedTransitionTag={`orgTitle-${item.key}`}
              style={styles.nativeName}
            >
              {item.nativeName}
            </Text>
          </View>
          <Image
            source={require("../../assets/icons/right-arrow.png")}
            style={styles.navIcon}
          />
        </View>
      </Pressable>
      <Animated.View
        sharedTransitionTag={`like-${item.key}`}
        style={styles.likeContainer}
      >
        <LikeButton style={styles.likeButton} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    zIndex: 1,
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
  likeContainer: {
    position: "absolute",
    top: DimensionsUtils.getDP(24),
    right: 6,
    zIndex: 100,
  },
  likeButton: {
    right: DimensionsUtils.getDP(6),
    height: DimensionsUtils.getIconSize(18),
    width: DimensionsUtils.getIconSize(18),
  },
  cityName: {
    color: Colors.black,
    fontFamily: "Montserrat-SemiBold",
    fontSize: DimensionsUtils.getFontSize(16),
  },
  nativeName: {
    fontSize: DimensionsUtils.getFontSize(14),
    fontFamily: "Montserrat-Medium",
    color: Colors.grey,
  },
  navIcon: {
    width: DimensionsUtils.getDP(12),
    height: DimensionsUtils.getDP(12),
  },
  footer: {
    paddingVertical: DimensionsUtils.getDP(8),
    paddingHorizontal: DimensionsUtils.getDP(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CitiesListItem;
