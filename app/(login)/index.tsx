import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <MyCampo
          title={"Email"}
          onPress={() => {}}
          placeholder={"Insira o email aqui"}
        />
        <MyCampo
          title={"Senha"}
          onPress={() => {}}
          placeholder={"Insira a senha aqui"}
          isPassword={true}
        />
      </View>
      <Link href={"/trilhas"} asChild>
        <MyButton text={"Entrar"} onPress={() => {}} />
      </Link>
      <View
        style={{
          gap: 8,
        }}
      >
        <Link href={"/(login)/recuperar"} asChild>
          <TextLink text={"Esqueci a senha"} onPress={() => {}} />
        </Link>
        <Link href="/(login)/registrar" asChild>
          <TextLink text={"Primeiro acesso"} onPress={() => {}} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 4,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    width: "100%",
    marginBottom: 0, // Ajusta a distância entre os campos e o botão
    gap: 4, // Espaçamento consistente entre os campos
  },
});
