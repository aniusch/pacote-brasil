import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

type CampoProps = {
  title: string;
  placeholder: string;
  value: string; // Add value prop to control the input text
  onChangeText: (text: string) => void; // Add onChangeText prop to handle text changes
  isPassword?: boolean; // Prop to indicate if it's a password field
};

const MyCampo: React.FC<CampoProps> = ({
  title,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
}) => {
  return (
    <View style={styles.campo}>
      <Text style={[styles.title, styles.titleTypo]}>{title}</Text>
      <View style={styles.placeholderTextParent}>
        <TextInput
          style={styles.placeholderText}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#555"
          secureTextEntry={isPassword}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "left",
    color: "#000",
    fontSize: 18,
  },
  title: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    marginBottom: 4,
  },
  placeholderText: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "#000",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingVertical: 4,
    width: "100%",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  placeholderTextParent: {
    alignSelf: "stretch",
  },
  campo: {
    width: "100%",
    marginVertical: 12,
  },
});

export default MyCampo;
