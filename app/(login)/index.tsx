import {
  View,
  StyleSheet,
  Pressable,
  Keyboard,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Login falhou" + err.message);
    } finally {
      setLoading(false);
    }
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
            value={email}
            onChangeText={setEmail}
            placeholder={"Insira o email aqui"}
          />
          <MyCampo
            title={"Senha"}
            value={password}
            onChangeText={setPassword}
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
          {loading ? (
            <ActivityIndicator size={"small"} style={{ margin: 28 }} />
          ) : (
            <>
              <Link href={"/(login)/recuperar"} asChild>
                <TextLink text={"Esqueci a senha"} onPress={() => {}} />
              </Link>
              <Link href="/(login)/registrar" asChild>
                <TextLink text={"Primeiro acesso"} onPress={() => {}} />
              </Link>
            </>
          )}
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
    marginBottom: 0,
    gap: 4,
  },
});
