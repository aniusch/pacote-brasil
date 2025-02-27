import { Stack, Link } from "expo-router";
import { Image, Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="(login)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#D7961D" },
          headerTitleAlign: "center",
          headerBackButtonMenuEnabled: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <>
                <Link href={"/detalhes/user"}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                      fontWeight: 700,
                      padding: 4,
                    }}
                  >
                    Menu
                  </Text>
                </Link>
              </>
            );
          },
          headerTitle: () => {
            return (
              <>
                <Image
                  source={require("@/images/icon.png")}
                  style={{ width: 64, height: 64 }}
                />
              </>
            );
          },
        }}
      />
      <Stack.Screen name="detalhes/ajuda" options={{ headerShown: false }} />
      <Stack.Screen
        name="detalhes/user"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#D7961D" },
          headerTitle: "Perfil",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerRight: () => {
            return (
              <>
                <Link href={"/detalhes/user"}>
                  <Text
                    style={{ fontSize: 16, color: "#fff", fontWeight: 700 }}
                  >
                    Menu
                  </Text>
                </Link>
              </>
            );
          },
        }}
      />
      <Stack.Screen
        name="produtos"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detalhes/finalizar"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

//root layout
