import { useState } from "react";
import { Pressable, View, StyleSheet, TextInput, Text, Alert } from "react-native";

export default function App() {

  let [textResult,setTextResult] = useState();
  let [textInputContent,setTextInputContent] = useState("");

  function handlePressable(){

    if (textInputContent == "") {

      Alert.alert("Alerta","No se ha introducido nada");
      setTextInputContent("");

    }else if (isNaN(textInputContent)) {

      Alert.alert("Alerta","Se ha introducido texto");
      setTextInputContent("");

    }else if (!isNaN(textInputContent)) {

      setTextResult((textInputContent * 0.62) + " millas");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Convertidor de km a millas</Text>
      <TextInput onChangeText={(text) => setTextInputContent(text)} placeholder="Inserta tu texto" value={textInputContent}/>
      <Text style={styles.text}>{textResult}</Text>
      <Pressable style={styles.pressable} onPress={handlePressable}>
        <Text>Pulsa...</Text>
      </Pressable>
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
  pressable: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "cyan",
    borderRadius: 2
  },
  text:{
    fontSize: 24
  }
});
