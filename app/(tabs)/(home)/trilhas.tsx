import { View, Text } from "react-native";
import { GStyles } from "@/styles/global";

export default function Trilhas() {
  return (
    <View
      style={
        (GStyles.container, { justifyContent: "center", alignItems: "center" })
      }
    >
      <Text style={GStyles.pageTitle}>
        Escolha uma das trilhas de experiência!
      </Text>
      <View></View>
    </View>
  );
}
