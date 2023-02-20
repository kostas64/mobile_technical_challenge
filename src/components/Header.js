import React from "react";
import { Colors } from "../../assets/Colors";
import dict from "../../assets/dictionary.json";
import { DimensionsUtils } from "../utils/DimensionsUtils";
import { View, StyleSheet, Image, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = ({}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={{
          height: insets.top + 92,
        }}
      >
        <View style={[styles.container, { paddingTop: insets.top + 6 }]}>
          <View>
            <View style={styles.row}>
              <Text style={styles.labelMed}>{dict.headerTitle1}</Text>
              <Text style={styles.labelBold}>{` ${dict.headerTitle2}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelMed}>{dict.headerTitle3}</Text>
              <Text style={styles.labelBold}>{` ${dict.headerTitle4}`}</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/logo/fcm_logo.png")}
            style={styles.logo}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightYellow,
    paddingHorizontal: DimensionsUtils.getDP(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  labelMed: {
    color: Colors.black,
    fontFamily: "Montserrat-Regular",
    fontSize: DimensionsUtils.getFontSize(18),
  },
  labelBold: {
    color: Colors.black,
    fontFamily: "Montserrat-Bold",
    fontSize: DimensionsUtils.getFontSize(18),
  },
  logo: {
    height: DimensionsUtils.getDP(42),
    width: DimensionsUtils.getDP(70),
  },
});

export default Header;
