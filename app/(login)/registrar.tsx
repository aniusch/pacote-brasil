import { View, StyleSheet } from "react-native";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";
import { Link } from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

export default function Registrar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert("Confira seu email!");
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Registro falhou" + err.message);
    } finally {
      setLoading(false);
    }
  };

  const isValid = (password: string, password2: string) => {
    if (password === password2) {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <MyCampo
          title={"Nome Completo"}
          placeholder={"Insira o seu nome completo aqui"}
          onChangeText={setName}
          value={name}
        />
        <MyCampo
          title={"Email"}
          placeholder={"Insira o seu email aqui"}
          onChangeText={() => {}}
          value={email}
        />
        <MyCampo
          title={"Criar senha"}
          placeholder={"Insira a senha aqui"}
          isPassword={true}
          onChangeText={() => {}}
          value={password}
        />
        <MyCampo
          title={"Confirmar senha"}
          placeholder={"Insira a senha aqui"}
          isPassword={true}
          onChangeText={() => {
            isValid(password, password2);
          }}
          value={password2}
        />
      </View>
      <View>
        <Link dismissTo href="/" asChild>
          <MyButton text={"Cadastrar"} onPress={signUp} />
        </Link>
      </View>
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
