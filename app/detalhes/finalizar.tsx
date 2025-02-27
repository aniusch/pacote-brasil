import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { GStyles } from "@/styles/global";
import MyButton from "../components/MyButton";
export default function Ajuda() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#D7961D" }}>
      <View style={styles.container}>
        <Image source={require("@/images/icon.png")} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={GStyles.sectionTitle}>Pedido Finalizado!</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Obrigado por comprar conosco!</Text>
          <Text style={styles.text}>
            Em breve uma cesta recheada chegará em sua casa
          </Text>
          <Text style={styles.text}>Acompanhe a sua compra pelo e-mail!</Text>
        </View>
        <View style={[GStyles.linksContainer, { alignItems: "center" }]}>
          <MyButton
            text="Finalizar"
            onPress={() => {
              router.push("/(tabs)/(home)/trilhas");
            }}
          />
        </View>
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
    paddingBottom: 48,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 48,
  },
  text: {
    fontWeight: 700,
    fontSize: 20,
    textAlign: "center",
    color: "#D7961D",
  },
});
