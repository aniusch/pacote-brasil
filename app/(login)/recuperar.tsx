import { View, StyleSheet, Text } from "react-native";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";
import { Link } from "expo-router";

export default function Recuperar() {
  return (
    <View style={styles.container}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: 700, textAlign: "center" }}>
          Recuperar Senha
        </Text>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          Um email de recuperação será enviado para a sua conta
        </Text>
      </View>
      <View style={styles.formContainer}>
        <MyCampo
          title={"Email"}
          onPress={() => {}}
          placeholder={"Insira o seu email aqui"}
        />
      </View>
      <Link dismissTo href="/" asChild>
        <MyButton text={"Recuperar senha"} onPress={() => {}} />
      </Link>
      <View>
        <Link dismissTo href="/" asChild>
          <TextLink text={"Possuo cadastro"} onPress={() => {}} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 32,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    width: "100%",
    marginBottom: 0, // Ajusta a distância entre os campos e o botão
    gap: 4, // Espaçamento consistente entre os campos
  },
});
