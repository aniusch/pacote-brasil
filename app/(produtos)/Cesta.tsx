import { FIREBASE_DB } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

type CestaProps = {
  itemID: number;
};

// Conectar ao banco de dados referente ao ID da cesta e carregar o titulo
const id = 1;
const Cesta: React.FC<CestaProps> = ({ itemID }) => {
  useEffect(() => {
    queryCestas();
  }, []);

  const queryCestas = async () => {
    const cestaRef = collection(FIREBASE_DB, "Cesta");
    const q = query(cestaRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };
  return <></>;
};

export default Cesta;
