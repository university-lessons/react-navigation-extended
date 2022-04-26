import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Listing() {
  return (
    <View style={styles.container}>
      <Text>Listing</Text>
      <Text>Listing</Text>
      <Text>Listing</Text>
      <Text>Listing</Text>
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
