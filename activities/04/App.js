import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
        <Text style={styles.container}>Esto mostrará contenido distinto</Text>
        <Text style={styles.container}>Esto mostrará otro contenido distinto</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
