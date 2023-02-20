import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import BackButton from "./BackButton";
import { images } from "../../Images";
import { LikeButton } from "./LikeButton";
import { Colors } from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width: WIDTH } = Dimensions.get("window");

const ImageWithButton = ({ city }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <>
      <Image
        resizeMode="contain"
        source={images[city?.key]}
        style={[
          styles.image,
          {
            marginTop: insets.top > 0 ? insets.top : 20,
          },
        ]}
      />
      <View
        style={[
          styles.namesContainer,
          {
            top:
              insets.top > 0
                ? insets.top + DimensionsUtils.getDP(164)
                : DimensionsUtils.getDP(184),
          },
        ]}
      >
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.nativeName}>{city.nativeName}</Text>
      </View>
      <Pressable
        onPress={() => navigation.pop()}
        style={[
          styles.backContainer,
          {
            top: insets.top > 0 ? insets.top + 18 : 32,
          },
        ]}
      >
        <BackButton />
      </Pressable>
      <View
        style={{
          top: insets.top > 0 ? insets.top - 8 : 10,
          position: "absolute",
          right: -4,
        }}
      >
        <LikeButton style={styles.like} />
      </View>
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
    width: WIDTH - 16,
    borderRadius: DimensionsUtils.getDP(24),
    height: DimensionsUtils.getDP(240),
  },
  like: {
    width: DimensionsUtils.getDP(18),
    height: DimensionsUtils.getDP(18),
  },
  namesContainer: {
    borderRadius: DimensionsUtils.getDP(12),
    padding: DimensionsUtils.getDP(8),
    backgroundColor: Colors.white,
    position: "absolute",
    left: DimensionsUtils.getDP(24),
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
});

export default ImageWithButton;
