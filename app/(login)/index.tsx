import {
  View,
  StyleSheet,
  Pressable,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";
import { FIREBASE_DB } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, forwardRef, useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaging, setLoaging] = useState(false);

  useEffect(() => {
    queryCestas();
  }, []);

  const queryCestas = async () => {
    const cestaRef = collection(FIREBASE_DB, "Cesta");
    const q = query(cestaRef, where("id", "==", 1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
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
        <Link href={"/(tabs)/(home)/trilhas"} asChild>
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
      </SafeAreaView>
    </Pressable>
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
