import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {

  let [text1,setText1] = useState("Texto");
  let [text2,setText2] = useState("Texto");
  let [text3,setText3] = useState("Texto");
  let [text4,setText4] = useState("Texto");

  function changeText(textParameter) {
    
    switch (textParameter) {

      case "1":

        text1 == "Texto" ? setText1("Texto cambiado") : setText1("Texto");
        break;

      case 2:

        text2 == "Texto" ? setText2("Texto cambiado") : setText2("Texto");
        break;

      case 3:

        text3 == "Texto" ? setText3("Texto cambiado") : setText3("Texto");
        break;

      case 4:

        text4 == "Texto" ? setText4("Texto cambiado") : setText4("Texto");
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => changeText("1")} style={styles.text}>
        {text1}
      </Text>
      <Text onPress={() => changeText(2)} style={styles.text}>
        {text2}
      </Text>
      <Text onPress={() => changeText(3)} style={styles.text}>
        {text3}
      </Text>
      <Text onPress={() => changeText(4)} style={styles.text}>
        {text4}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
});
