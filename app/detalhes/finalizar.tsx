import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { GStyles } from "@/styles/global";
export default function Ajuda() {
  return (
    <View style={{ flex: 1, backgroundColor: "#D7961D" }}>
      <View style={styles.container}>
        <Image source={require("@/images/icon.png")} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza a logo e o conteúdo
    paddingTop: 40, // Espaçamento superior para dar distância da barra de status
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    padding: 16,
    backgroundColor: "#fff", // Cor de fundo do conteúdo
    borderTopLeftRadius: 80, // Bordas arredondadas no topo esquerdo para formar a circunferência
    borderTopRightRadius: 90, // Bordas arredondadas no topo direito para formar a circunferência
    overflow: "hidden", // Garante que os filhos não ultrapassem as bordas arredondadas
    marginTop: -40, // Movimenta o conteúdo para que ele fique logo abaixo da parte superior circular
  },
});
