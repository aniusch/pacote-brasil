import { Stack, useLocalSearchParams } from "expo-router";

export default function ProdutosLayout() {
  const { title } = useLocalSearchParams(); // Extract title

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#D7961D" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="cesta/[id]"
        options={{
          title: title ? String(title) : "Voltar",
        }}
      />
    </Stack>
  );
}
