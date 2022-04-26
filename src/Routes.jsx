import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Listing from "./pages/Listing";

// Criar um navigator Stack para a tela de Login
const Stack = createNativeStackNavigator();
// Criar um navigator Tab para as outras telas
const Tab = createBottomTabNavigator();

export default function Routes() {
  // aqui está o objeto "app", que é visível em toda a aplicação por meio do useContext
  const app = useContext(AppContext);

  const NavigatorLogin = () => (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );

  const NavigatorTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Listing" component={Listing} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {!app.isLoggedIn ? <NavigatorLogin /> : <NavigatorTabs />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
