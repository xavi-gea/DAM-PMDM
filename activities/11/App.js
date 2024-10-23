import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {

  let content = {
    paragraphOne: "Párrafo 1",
    paragraphTwo: "Párrafo 2",
    title: "Esto es un título"
  }

  function Article(){

    return (
      <View style={styles.container}>
        <Text>{content.title}</Text>
        <Text>{content.paragraphOne}</Text>
        <Text>{content.paragraphTwo}</Text>
      </View>
    );
  }

  function Articles(){

    let articles = []

    for (let i = 0; i < 4; i++) {
      
      articles.push(<Article key={i.toString()}></Article>)
    }

    return (
      articles
    );
  }

  return (
    <Articles></Articles>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
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
