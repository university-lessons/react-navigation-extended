import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Home() {
  // obter o contexto da aplicação
  const app = useContext(AppContext);

  const handleLogout = () => {
    // note que eu tenho acesso ao método "setLoggedIn" pois ele está no objeto "app", que pertence ao contexto
    app.setLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
      <Button title="Logout" onPress={handleLogout} />
    </View>
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
