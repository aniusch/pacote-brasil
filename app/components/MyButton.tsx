import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

type MyButtonProps = {
  text: string;
  onPress: () => void;
};

const MyButton: React.FC<MyButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      accessibilityLabel={`Button: ${text}`}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    width: width * 0.6, // Adaptação à largura da tela
    height: 48, // Altura razoável para toque
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#0D3439",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18, // Maior legibilidade
    textAlign: "center",
    fontWeight: "700",
  },
});

export default MyButton;
