import { StyleSheet, Text, View, Button } from "react-native";

export default function PageDemo1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Page Demo 1 (Stack inside Tab)</Text>
      <Button
        title="Go to Demo 2"
        onPress={() => navigation.navigate("Demo2")}
      />
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
