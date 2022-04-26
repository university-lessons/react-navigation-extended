import { StyleSheet, Text, View, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Login() {
  const app = useContext(AppContext);

  const handleLogin = () => {
    app.setLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text>Login (Fake)</Text>
      <Button title="Login" onPress={handleLogin} />
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
