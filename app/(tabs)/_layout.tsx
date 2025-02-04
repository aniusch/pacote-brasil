import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D7961D",
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen name="(home)/trilhas" />
      <Tabs.Screen name="(home)/pacotes" />
      <Tabs.Screen name="(home)/pagamento" />
      <Tabs.Screen name="(home)/ajuda" />
    </Tabs>
  );
}
