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
        swipeEnabled: false,
        tabBarPressColor: "transparent",
        tabBarPressOpacity: 1,
      }}
    >
      <MaterialTopTabs.Screen
        name="(home)/trilhas"
        options={{ title: "Trilhas" }}
        listeners={() => ({
          tabPress: (e) => e.preventDefault(),
        })}
      />
      <MaterialTopTabs.Screen
        name="(home)/pacotes"
        options={{ title: "Pacotes" }}
        listeners={() => ({
          tabPress: (e) => e.preventDefault(),
        })}
      />
      <MaterialTopTabs.Screen
        name="(home)/pagamento"
        options={{ title: "Pagamento" }}
        listeners={() => ({
          tabPress: (e) => e.preventDefault(),
        })}
      />
    </MaterialTopTabs>
  );
};

export default Layout;
