import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  type?: "primary" | "danger" | "caution";
  size?: "tiny" | "small" | "normal" | "medium" | "big";
}

const sizes = {
  tiny: 64,
  small: 120,
  normal: 180,
  medium: 240,
  big: 300,
};

const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: "#0D3439",
  },
  danger: {
    backgroundColor: "#B22222",
  },
  caution: {
    backgroundColor: "#E2B93B",
  },
});

const buttonColors = {
  primary: buttonStyles.primary,
  danger: buttonStyles.danger,
  caution: buttonStyles.caution,
};

const Button: React.FC<ButtonProps> = (
  { title, onPress, type = "primary", size = "big" },
  ref?
) => {
  const btnSize = sizes[size];
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: btnSize },
        buttonColors[type],
        { padding: size === "tiny" ? 6 : 16 },
      ]}
      ref={ref}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
