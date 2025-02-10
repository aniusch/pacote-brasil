import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { FIREBASE_DB } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "expo-router";

const img = require("@/images/capa-trilhas.png");

type TTrilhaCard = {
  id: string;
  name?: string;
  duration: string;
  description?: string;
  cost_month?: string;
};

type TrilhaCardProps = {
  Trilha: TTrilhaCard;
};

const TrilhaCard: React.FC<TrilhaCardProps> = ({ Trilha }) => {
  const [trilha, setTrilha] = useState<TTrilhaCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrilha = async () => {
      try {
        const docRef = doc(FIREBASE_DB, "Trilha", Trilha.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTrilha({ id: Trilha.id, ...docSnap.data() } as TTrilhaCard);
        } else {
          console.log("Nenhuma trilha encontrada com esse ID.");
        }
      } catch (error) {
        console.error("Erro ao buscar trilha:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrilha();
  }, [Trilha.id]); // Evita re-renderizações desnecessárias

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Link
          href={{
            pathname: "/(tabs)/(home)/pacotes",
            params: {
              nums: trilha?.duration || null,
              title: trilha?.name || "Desconhecido",
            },
          }}
          asChild
        >
          <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={img} />
            <Text style={styles.title} numberOfLines={1}>
              {trilha
                ? Number(trilha.duration) > 1
                  ? `${trilha.name} - ${trilha.duration} meses`
                  : `${trilha.name} - ${trilha.duration} mês`
                : "Trilha não encontrada"}
            </Text>
            <Text style={styles.description}>
              {trilha?.description || "Sem descrição disponível"}
            </Text>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: width * 0.8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 25,
    paddingBottom: 10,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginHorizontal: 6,
  },
  description: {
    marginHorizontal: 6,
    fontFamily: "Roboto-Regular",
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: 100,
  },
});

export default TrilhaCard;
