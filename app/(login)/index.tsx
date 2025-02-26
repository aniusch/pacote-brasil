import {
  View,
  StyleSheet,
  Pressable,
  Keyboard,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Link, Redirect } from "expo-router";
import MyButton from "@/components/MyButton";
import MyCampo from "@/components/MyCampo";
import TextLink from "@/components/TextLink";
import React, { useState } from "react";
import { FirebaseError } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
  User,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure();

const trava: boolean = false;

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [User, setUser] = useState<User>();

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setUser(response.data);
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const auth = getAuth(); // Initialize the auth instance using the modular SDK
      await signInWithEmailAndPassword(auth, email, password); // Use the modular API to sign in
      alert("Login bem-sucedido " + auth.currentUser?.email);
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Login falhou: " + err.message); // Provide the error message if login fails
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

        {trava ? (
          loading ? (
            <ActivityIndicator size={"small"} style={{ margin: 28 }} />
          ) : (
            <>
              <MyButton text={"Entrar"} onPress={signIn} />
              <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={googleSignIn}
                disabled={loading}
              />
              ;
            </>
          )
        ) : (
          <Link href={"/(tabs)/(home)/trilhas"} asChild>
            <MyButton text={"Entrar"} onPress={() => {}} />
          </Link>
        )}

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
