import { FIREBASE_DB } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { TCestaCard } from "@/app/components/CestaCard";
import { Link } from "expo-router";
import { GStyles } from "@/styles/global";

const Cesta: React.FC = () => {
  const { cestaData } = useLocalSearchParams(); //get cesta id from link params
  const cesta: TCestaCard = cestaData ? JSON.parse(cestaData as string) : null;

  return (
    <View
      style={
        (GStyles.container, { flex: 1, justifyContent: "center", padding: 0 })
      }
    >
      <View style={{ minHeight: 100, justifyContent: "center" }}>
        <Text style={styles.mainTitle}>{cesta.name}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.pictureContainer}>
          <Image
            source={{ uri: cesta.picture_url }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>Conteúdo</Text>
        <View style={styles.listContainer}>
          {cesta.items?.map((item, index) => {
            return (
              <Text style={styles.listItem} key={index}>
                - {item.description}
              </Text>
            );
          })}
        </View>
        <Text style={styles.title}>Receita Indicada: {cesta.recipe}</Text>
      </View>
      <View style={GStyles.linksContainer}>
        <Link href={".."}>
          <Text style={GStyles.links}>Voltar</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
    marginHorizontal: 24,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 25,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  pictureContainer: {
    backgroundColor: "#d7961c",
    width: "100%",
    height: 200,
  },
  listContainer: {},
  listItem: {
    padding: 8,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    padding: 12,
  },
  mainTitle: {
    fontSize: 24,
    color: "#2e9000",
    textAlign: "center",
  },
});

export default Cesta;
