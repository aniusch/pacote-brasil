import {
  View,
  StyleSheet,
  Pressable,
  Keyboard,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Link, Redirect, useRouter } from "expo-router";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";
import React, { useEffect, useState } from "react";
import { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { FIREBASE_AUTH } from "@/firebaseConfig";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        router.replace("/(tabs)/(home)/trilhas");
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert("Login com Sucesso: " + FIREBASE_AUTH.currentUser?.displayName);
    } catch (error) {
      const err = error as FirebaseError;
      alert("Login error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return <Redirect href="/(tabs)/(home)/trilhas" />;
  }

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.formContainer}>
          <MyCampo
            title="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Insira o seu email"
          />
          <MyCampo
            title="Senha"
            value={password}
            onChangeText={setPassword}
            placeholder="Insira a sua senha"
            isPassword={true}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="small" style={{ margin: 28 }} />
        ) : (
          <>
            <MyButton text="Login" onPress={signIn} />
          </>
        )}
        <View style={{ gap: 8 }}>
          {loading ? (
            <ActivityIndicator size="small" style={{ margin: 28 }} />
          ) : (
            <>
              <Link href="/(login)/recuperar" asChild>
                <TextLink text="Esqueceu a senha?" onPress={() => {}} />
              </Link>
              <Link href="/(login)/registrar" asChild>
                <TextLink
                  text="Primeiro acesso? Registre aqui"
                  onPress={() => {}}
                />
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
    backgroundColor: "#FFFFFF",
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    width: "100%",
    gap: 4,
  },
});
