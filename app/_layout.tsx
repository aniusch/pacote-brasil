import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#D7961D" }}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require("@/images/icon.png")} style={styles.logo} />
        {/* Conteúdo da página */}
      </View>
      <View style={styles.contentContainer}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza a logo e o conteúdo
    paddingTop: 40, // Espaçamento superior para dar distância da barra de status
  },
  logo: {
    width: 250, // Tamanho da logo (ajuste conforme necessário)
    height: 250, // Tamanho da logo (ajuste conforme necessário)
    marginBottom: 24, // Espaço entre a logo e o conteúdo
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
