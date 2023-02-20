import {
  View,
  Text,
  Image,
  Easing,
  Animated,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import CityThingsMapItem from "./CityThingsMapItem";
import { DimensionsUtils } from "../utils/DimensionsUtils";

const CityThingsItem = ({ label, itemImage, places }) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(1);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }

    setOpen(!open);
  };

  return (
    <>
      <Pressable style={styles.container} onPress={toggleListItem}>
        <View style={styles.leftContainer}>
          <Image style={styles.thingImage} source={itemImage} />
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Image
            style={[
              styles.pressIcon,
              !open && { transform: [{ rotate: "90deg" }] },
              open && { transform: [{ rotate: "270deg" }] },
            ]}
            source={require("../../assets/icons/chevron-arrow.png")}
          />
        </View>
      </Pressable>
      <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
        <View
          style={styles.bodyContainer}
          onLayout={(event) =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }
        >
          {places?.map(({ place }, index) => (
            <CityThingsMapItem
              key={index}
              isLast={index === places?.length - 1}
              place={place}
            />
          ))}
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  thingImage: {
    width: DimensionsUtils.getDP(38),
    height: DimensionsUtils.getDP(38),
  },
  label: {
    color: "black",
    marginLeft: DimensionsUtils.getDP(16),
    fontFamily: "Montserrat-SemiBold",
    fontSize: DimensionsUtils.getFontSize(16),
  },
  arrowContainer: {
    borderRadius: DimensionsUtils.getDP(8),
    padding: DimensionsUtils.getDP(8),
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  pressIcon: {
    width: DimensionsUtils.getDP(16),
    height: DimensionsUtils.getDP(16),
  },
  bodyBackground: {
    marginTop: DimensionsUtils.getDP(12),
    borderRadius: DimensionsUtils.getDP(12),
    backgroundColor: "rgba(0,0,0,0.05)",
    overflow: "hidden",
  },
  bodyContainer: {
    padding: DimensionsUtils.getDP(16),
    paddingLeft: DimensionsUtils.getDP(16),
    position: "absolute",
    bottom: 0,
  },
});

export default CityThingsItem;
