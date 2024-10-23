import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  
  let content = {
    paragraphOne: "Párrafo 1",
    paragraphTwo: "Párrafo 2",
    title: "Esto es un título"
  }
  
  return (
    <View style={styles.container}>
      <Text>{content.title}</Text>
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
  title:{
    fontSize: 12,
    fontWeight:"bold",
    fontStyle:"italic",
    textDecorationLine:"underline"
  }
});
