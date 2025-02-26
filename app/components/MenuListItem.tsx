import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

type TMenuListItemPros = {
  text: string;
  onPress?: (props?: any) => void;
  leadingIconURI: any;
  trailingIcon?: boolean;
};

export default function MenuListItem({
  text,
  onPress,
  leadingIconURI,
  trailingIcon = true,
}: TMenuListItemPros) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leadingIcon}>
        <Image source={leadingIconURI} />
      </View>
      <Text style={styles.text}>{text}</Text>
      {trailingIcon ? (
        <View style={styles.traillingIcon}>
          <Image source={require("@/images/arrow.png")} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 4,
  },
  leadingIcon: {
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 4,
    width: 34,
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    color: "#0D3439",
    flex: 1,
  },
  traillingIcon: {},
});
