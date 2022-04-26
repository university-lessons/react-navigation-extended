import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function PageDemo3() {
  return (
    <View style={styles.container}>
      <Text>Page Demo 3 (Stack inside Tab)</Text>
      <StatusBar style="auto" />
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
