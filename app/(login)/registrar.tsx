import { View, StyleSheet, Alert } from "react-native";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";

export default function Registrar() {
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const isValid = (password: string, confirmPassword: string) => {
    return password === confirmPassword && password.length > 5;
  };

  const signUp = async () => {
    if (!isValid(form.password, password2)) {
      Alert.alert("Erro", "As senhas não coincidem ou são muito curtas.");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        form.email,
        form.password
      );

      updateProfile(userCredential.user, {
        displayName: form.name,
      });
      Alert.alert("Sucesso", "Confira seu email para confirmação!");

      setForm({ name: "", email: "", password: "" });
      setPassword2("");
      router.push("/");
    } catch (e: any) {
      Alert.alert("Registro falhou", e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <MyCampo
          title={"Primeiro Nome"}
          placeholder={"Insira o seu primeiro nome aqui"}
          onChangeText={(text) => handleChange("name", text)}
          value={form.name}
        />
        <MyCampo
          title={"Email"}
          placeholder={"Insira o seu email aqui"}
          onChangeText={(text) => {
            handleChange("email", text);
          }}
          value={form.email}
        />
        <MyCampo
          title={"Criar senha"}
          placeholder={"Insira a senha aqui"}
          isPassword={true}
          onChangeText={(text) => {
            handleChange("password", text);
            isValid(text, password2);
          }}
          value={form.password}
        />
        <MyCampo
          title={"Confirmar senha"}
          placeholder={"Insira a senha aqui"}
          isPassword={true}
          onChangeText={(text) => {
            setPassword2(text);
            isValid(form.password, text);
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
