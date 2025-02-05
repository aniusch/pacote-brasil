import { FIREBASE_DB } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useLocalSearchParams } from "expo-router";

type TItem = {
  description: string;
};

type TCesta = {
  id: string | string[];
  name?: string;
  image_url?: any;
  recipe?: string;
  items?: Array<TItem>;
};

const Cesta: React.FC = () => {
  const { id } = useLocalSearchParams(); //get cesta id from link params
  const e: TCesta = { id: id };

  useEffect(() => {}, []); // Conectar ao banco de dados referente ao ID da cesta e
  // carregar o titulo, imagem e items
  return <></>;
};

export default Cesta;
