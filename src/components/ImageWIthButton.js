import React from "react";
import BackButton from "./BackButton";
import { images } from "../../Images";
import { LikeButton } from "./LikeButton";
import { Colors } from "../../assets/Colors";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Pressable, StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get("window");

const ImageWithButton = ({ city }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <>
      <Animated.Image
        resizeMode="cover"
        sharedTransitionTag={`img-${city.key}`}
        source={images[city?.key]}
        style={styles.image}
      />
      <View style={[styles.namesContainer]}>
        <Animated.Text
          sharedTransitionTag={`title-${city.key}`}
          style={styles.cityName}
        >
          {city.name}
        </Animated.Text>
        <Animated.Text
          sharedTransitionTag={`orgTitle-${city.key}`}
          style={styles.nativeName}
        >
          {city.nativeName}
        </Animated.Text>
      </View>
      <Pressable
        onPress={() => navigation.pop()}
        style={[
          styles.backContainer,
          {
            top: insets.top > 0 ? insets.top : 32,
          },
        ]}
      >
        <BackButton />
      </Pressable>
      <Animated.View
        sharedTransitionTag={`like-${city.key}`}
        style={{
          top: insets.top > 0 ? insets.top : 32,
          position: "absolute",
          right: -4,
        }}
      >
        <LikeButton style={styles.like} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    borderRadius: DimensionsUtils.getDP(16),
    backgroundColor: Colors.white,
    position: "absolute",
    elevation: 13,
    shadowRadius: 2.5,
    shadowOpacity: 0.25,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: DimensionsUtils.getDP(24),
  },
  image: {
    width: WIDTH,
    height: DimensionsUtils.getDP(240),
  },
  like: {
    top: DimensionsUtils.getDP(6),
    width: DimensionsUtils.getDP(18),
    height: DimensionsUtils.getDP(18),
  },
  namesContainer: {
    padding: DimensionsUtils.getDP(16),
  },
  cityName: {
    color: Colors.black,
    fontFamily: "Montserrat-SemiBold",
    fontSize: DimensionsUtils.getFontSize(18),
  },
  nativeName: {
    color: Colors.grey,
    fontFamily: "Montserrat-Medium",
    fontSize: DimensionsUtils.getFontSize(16),
  },
});

export default ImageWithButton;
