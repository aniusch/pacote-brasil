import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { GStyles } from "@/styles/global";
import { goBack } from "expo-router/build/global-state/routing";

export default function Ajuda() {
  return (
    <View style={{ flex: 1, backgroundColor: "#D7961D" }}>
      <View style={styles.container}>
        {/* Logo */}
        <Image source={require("@/images/icon.png")} style={styles.logo} />
        {/* Conteúdo da página */}
      </View>
      <View style={styles.contentContainer}>
        <Text style={GStyles.sectionTitle}>Precisa de Ajuda?</Text>
        <View style={GStyles.container}>
          <View
            style={
              (GStyles.container,
              { justifyContent: "center", alignItems: "center", gap: 24 })
            }
          >
            <Text style={styles.text}>
              {`(99) 9 9999-9999 `}
              <Text style={styles.telefoneFixo}>{`telefone fixo`}</Text>
            </Text>
            <View>
              {/*view to dodge the gap*/}
              <Text
                style={styles.text}
              >{`atendimento@pacotebrasil.com.br`}</Text>
              <Text style={styles.telefoneFixo}>
                {`Seg-Sex das 8h às 18h - Horário de Cuiabá`}
              </Text>
            </View>
          </View>
          <View style={GStyles.linksContainer}>
            <Link href={".."}>
              <Text style={GStyles.links}>Voltar</Text>
            </Link>
          </View>
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
  },
  text: {
    fontSize: 20,
    color: "#d7961d",
  },
  telefoneFixo: {
    fontSize: 15,
    color: "rgba(215, 150, 29, 0.5)",
  },
  telefoneFixoAtendimentopacoContainer: {
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    width: 365,
  },
});
