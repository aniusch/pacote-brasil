import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";

type TWarning = {
  message: string;
  onPress: () => void;
  setOpen: (state: boolean) => void;
};

export default function Warning({ message, onPress, setOpen }: TWarning) {
  return (
    <View style={styles.popupContainer}>
      <Image source={require("@/images/error.png")}></Image>
      <Text style={styles.descricao}>{message}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Voltar"
          size="small"
          onPress={() => {
            setOpen(false);
          }}
        ></Button>
        <Button
          title="Sair"
          type="caution"
          size="small"
          onPress={onPress}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  descricao: {
    textAlign: "center",
  },
  popupContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },
});
