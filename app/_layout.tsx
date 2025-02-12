import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="(login)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(pagamento)/pagamento"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="produtos" options={{ headerShown: false }} />
    </Stack>
  );
}

//root layout
