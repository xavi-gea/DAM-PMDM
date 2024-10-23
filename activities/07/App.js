import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  
  let content = {
    paragraphOne: "Párrafo 1",
    paragraphTwo: "Párrafo 2"
  }
  
  return (
    <View style={styles.container}>
      <Text>{content.paragraphOne}</Text>
      <Text>{content.paragraphTwo}</Text>
    </View>
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
