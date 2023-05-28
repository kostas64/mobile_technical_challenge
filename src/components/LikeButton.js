import { Colors } from "../../assets/Colors";
import React, { useState, useRef } from "react";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import { Animated, Image, StyleSheet } from "react-native";

export const LikeButton = ({ style }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const reverseOpacity = useRef(new Animated.Value(0)).current;

  const [liked, setLiked] = useState(false);

  const like = (value) => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(value ? opacity : reverseOpacity, {
          toValue: 0,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.timing(value ? reverseOpacity : opacity, {
          toValue: 1,
          duration: 90,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    setLiked(value);
  };

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: reverseOpacity,
            transform: [{ scale }],
          },
        ]}
        onTouchStart={() => like(!liked)}
      >
        <Image
          source={require("../../assets/icons/heart.png")}
          style={[
            styles.icon,
            {
              ...style,
            },
          ]}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ scale }],
          },
        ]}
        onTouchStart={() => like(!liked)}
      >
        <Image
          source={require("../../assets/icons/heart-o.png")}
          style={[
            styles.icon,
            {
              ...style,
            },
          ]}
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: DimensionsUtils.getDP(16),
    height: DimensionsUtils.getDP(30),
    width: DimensionsUtils.getDP(30),
    backgroundColor: Colors.white,
    position: "absolute",
    right: DimensionsUtils.getDP(28),
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    zIndex: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  icon: {
    position: "absolute",
  },
});
