import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { GStyles } from "@/styles/global";
import { Link } from "expo-router";
import { useScrollToTop } from "@react-navigation/native";
import React, { useRef } from "react";
import CestaCard from "@/components/CestaCard";

// Properly type the ref as ScrollView | null
export default function Trilhas() {
  const scrollViewRef = useRef<ScrollView | null>(null);

  // Activate the scroll-to-top functionality with the ref
  useScrollToTop(scrollViewRef);

  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={{ flexGrow: 1, padding: 0 }}
    >
      <View
        style={[
          GStyles.container,
          { flex: 1, justifyContent: "space-between", padding: 0 },
        ]}
      >
        <Text style={GStyles.pageTitle}>
          Escolha uma das trilhas de experiência!
        </Text>
        <View style={GStyles.contentContainer}>
          <CestaCard CestaID={1}></CestaCard>
        </View>
        <View style={GStyles.linksContainer}>
          <TouchableOpacity
            onPress={() =>
              scrollViewRef.current?.scrollTo({ y: 0, animated: true })
            }
          >
            <Text style={GStyles.links}>Voltar ao Topo</Text>
          </TouchableOpacity>
          <Link href={".."}>
            <Text style={GStyles.links}>Voltar</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
