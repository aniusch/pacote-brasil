import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { FIREBASE_DB } from "@/firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { Link } from "expo-router";

type CestaCardProps = {
  Cesta: any;
};

type TItem = {
  id: any;
  description: string;
};

type TCestaCard = {
  id: any;
  name?: string;
  picture_url?: string;
  recipe?: string;
  items?: TItem[];
};

const CestaCard: React.FC<CestaCardProps> = ({ Cesta }) => {
  const [cesta, setCesta] = useState<TCestaCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCesta = async () => {
      try {
        const docRef = doc(FIREBASE_DB, "Cesta", Cesta.id.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const itemsCollection = collection(docRef, "items");
          const itemsSnapshot = await getDocs(itemsCollection);

          const itemsList: TItem[] = itemsSnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              description: data.description,
            };
          });

          const thisDoc = { id: Cesta.id, ...docSnap.data(), items: itemsList };
          setCesta(thisDoc);
        } else {
          console.log("Nenhuma cesta encontrada com esse ID.");
        }
      } catch (error) {
        console.error("Erro ao buscar cesta:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCesta();
  }, [Cesta]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.title} numberOfLines={1}>
            {cesta ? cesta.name : "Cesta não encontrada"}
          </Text>
          <Link
            href={{
              pathname: "/produtos/cesta/[id]",
              params: {
                id: Cesta.id,
                title: Cesta.name,
                cestaData: JSON.stringify(cesta),
              },
            }}
            asChild
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Ver</Text>
            </TouchableOpacity>
          </Link>
        </>
      )}
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.8,
    height: 90,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#db8213",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CestaCard;
