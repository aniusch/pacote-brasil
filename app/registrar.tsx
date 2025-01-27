import { Text, View, StyleSheet } from "react-native";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <MyCampo
          title={"Nome Completo"}
          onPress={() => {}}
          placeholder={"Insira o seu nome completo aqui"}
        />
        <MyCampo
          title={"Email"}
          onPress={() => {}}
          placeholder={"Insira o seu email aqui"}
        />
        <MyCampo
          title={"Criar senha"}
          onPress={() => {}}
          placeholder={"Insira a senha aqui"}
          isPassword={true}
        />
        <MyCampo
          title={"Confirmar senha"}
          onPress={() => {}}
          placeholder={"Insira a senha aqui"}
          isPassword={true}
        />
      </View>
      <MyButton text={"Cadastrar"} onPress={() => {}} />
      <View>
        <TextLink text={"Possuo cadastro"} onPress={() => {}} />
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
    gap: 24,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    width: "100%",
    marginBottom: 0, // Ajusta a distância entre os campos e o botão
    paddingHorizontal: 16,
    gap: 16, // Espaçamento consistente entre os campos
  },
});
