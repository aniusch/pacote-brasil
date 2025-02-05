import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

type CestaCardProps = {
  CestaID: number;
};

const CestaCard: React.FC<CestaCardProps> = ({ CestaID }) => {
  return <View style={styles.container} />;
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.8,
    height: "auto",
  },
});

export default CestaCard;
