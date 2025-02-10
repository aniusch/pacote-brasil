import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs
      options={{}}
      screenOptions={{
        tabBarStyle: { backgroundColor: "#D7961D" },
        tabBarActiveTintColor: "#fff",
        tabBarIndicatorStyle: { backgroundColor: "#fff", height: 3 },
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarScrollEnabled: false,
        swipeEnabled: false,
      }}
    >
      <MaterialTopTabs.Screen
        name="(home)/trilhas"
        options={{ title: "Trilhas" }}
      />
      <MaterialTopTabs.Screen
        name="(home)/pacotes"
        options={{ title: "Pacotes" }}
      />
      <MaterialTopTabs.Screen
        name="(home)/ajuda"
        options={{ title: "Ajuda" }}
      />
    </MaterialTopTabs>
  );
};

export default Layout;
