import * as React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

type TextLink = {
  text: string;
  onPress: () => void;
};

const TextLink: React.FC<TextLink> = ({ text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      <Text style={styles.TextLink}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  TextLink: {
    fontSize: 15,
    textDecorationLine: "underline", // Preferível usar 'textDecorationLine' para garantir a compatibilidade
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#000",
    textAlign: "center",
  },
  pressable: {
    // Adicionando estilos para o Pressable
  },
  pressed: {
    opacity: 0.5, // Efeito visual ao pressionar
  },
});

export default TextLink;
