import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Article from "./components/Article";

export default function App() {

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
