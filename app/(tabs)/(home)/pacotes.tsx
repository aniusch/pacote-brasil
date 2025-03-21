import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { GStyles } from "@/styles/global";
import { useScrollToTop } from "@react-navigation/native";
import React, { useRef } from "react";
import ItemsList from "@/components/ItemsList";
import CestaCard from "@/app/components/CestaCard";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import MyButton from "@/app/components/MyButton";

// Properly type the ref as ScrollView | null
export default function Pacotes() {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const { nums } = useLocalSearchParams();
  const router = useRouter();

  // Activate the scroll-to-top functionality with the ref
  useScrollToTop(scrollViewRef);

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={[
          GStyles.container,
          { flex: 1, justifyContent: "space-between", padding: 0 },
        ]}
      >
        <Text style={GStyles.pageTitle}>
          Conheça todas as delícias que preparamos para você!
        </Text>
        <View style={GStyles.contentContainer}>
          <ItemsList
            colletionName="Cesta"
            itemsNum={Number(nums)}
            renderItem={(item) => <CestaCard key={item.id} Cesta={item} />}
          />
        </View>
        <View style={GStyles.linksContainer}>
          <MyButton
            text="Fechar Pedido"
            onPress={() => {
              router.push("/(tabs)/(home)/pagamento");
            }}
          />
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
