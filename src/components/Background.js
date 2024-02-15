import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Background = () => {
  return (
    <LinearGradient
      colors={[
        "rgba(22,23,23,1)",
        "rgba(173,120,221,1)",
        "rgba(122,64,173,1)",
        "rgba(124,18,215,1)",
      ]}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default Background;
