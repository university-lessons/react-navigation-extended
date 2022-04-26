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
import PageDemo1 from "./pages/PageDemo1";
import PageDemo2 from "./pages/PageDemo2";
import PageDemo3 from "./pages/PageDemo3";

// Criar um navigator Stack para a tela de Login
const Stack = createNativeStackNavigator();
// Criar um navigator Tab para as outras telas
const Tab = createBottomTabNavigator();
// Criar um navigator Stack que estará dentro do Tab Navigator (com abas escondidas)
const StackNested = createNativeStackNavigator();

export default function Routes() {
  // aqui está o objeto "app", que é visível em toda a aplicação por meio do useContext
  const app = useContext(AppContext);

  const NavigatorLogin = () => (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );

  // aqui vou criar páginas para colocar dentro de uma Tab (navitagor Stack dentro do Tab)
  // note que eu escondi a Header das páginas com: options={{ headerShown: false }}
  const NavigatorNested = () => (
    <StackNested.Navigator>
      <StackNested.Screen
        name="Demo1"
        component={PageDemo1}
        options={{ headerShown: false }}
      />
      <StackNested.Screen
        name="Demo2"
        component={PageDemo2}
        options={{ headerShown: false }}
      />
      <StackNested.Screen
        name="Demo3"
        component={PageDemo3}
        options={{ headerShown: false }}
      />
    </StackNested.Navigator>
  );

  const NavigatorTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Listing" component={Listing} />
      {/* Note que a proxima Tab é um Navigator Stack */}
      <Tab.Screen name="Nested" component={NavigatorNested} />
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
