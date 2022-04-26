import { StyleSheet, Text, View, Button } from "react-native";

export default function PageDemo2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Page Demo 2 (Stack inside Tab)</Text>
      <Button
        title="Go to Demo 3"
        onPress={() => navigation.navigate("Demo3")}
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
