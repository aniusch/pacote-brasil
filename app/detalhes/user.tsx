import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import { GStyles } from "@/styles/global";
import MenuListItem from "../components/MenuListItem";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { FirebaseError } from "firebase/app";
import Warning from "../components/WarningPopUp";
import Modal from "../components/Modal";

export default function User() {
  const [overlay, setOverlay] = useState<boolean>(false);
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#D7961D" }}>
      <View style={styles.container}>
        <Image source={require("@/images/icon.png")} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.title}>Perfil</Text>
          <View style={styles.listItems}>
            <MenuListItem
              text="Visualizar Perfil"
              leadingIconURI={require("@/images/profile.png")}
            />
            <MenuListItem
              text="Editar Perfil"
              leadingIconURI={require("@/images/edit.png")}
            />
            <MenuListItem
              text="Mudar senha"
              leadingIconURI={require("@/images/lock.png")}
            />
            <MenuListItem
              text="Dicas - Notificações"
              leadingIconURI={require("@/images/notification.png")}
            />
          </View>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.title}>Sobre o App</Text>
          <View style={styles.listItems}>
            <MenuListItem
              text="Avaliar o app"
              leadingIconURI={require("@/images/estrela.png")}
            />
            <MenuListItem
              text="Termos de uso"
              leadingIconURI={require("@/images/docicon.png")}
            />
            <MenuListItem
              text="Ajuda"
              leadingIconURI={require("@/images/help.png")}
            />
            <MenuListItem
              text="Excluir conta"
              leadingIconURI={require("@/images/excluir.png")}
            />
            <MenuListItem
              text="Sair"
              leadingIconURI={require("@/images/sair.png")}
              onPress={() => {
                setOverlay(true);
              }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Link href={".."}>
            <Text style={GStyles.links}>Voltar</Text>
          </Link>
        </View>
      </View>
      <Modal isOpen={overlay} hasInput={false}>
        <Warning
          message="Tem certeza que deseja sair?"
          setOpen={setOverlay}
          onPress={async () => {
            try {
              await signOut(FIREBASE_AUTH);
              router.replace("/");
            } catch (error) {
              alert("Erro ao sair: " + (error as FirebaseError).message);
            }
          }}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 40,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 24,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    padding: 40,
    backgroundColor: "#fff",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 90,
    overflow: "hidden",
    marginTop: -40,
    gap: 12,
  },
  title: {
    color: "#0D3439",
    fontWeight: 600,
    fontSize: 20,
  },
  listContainer: {},
  listItems: {
    padding: 12,
    gap: 8,
  },
});
