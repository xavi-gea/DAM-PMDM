import { useState } from "react";
import { Pressable, View, StyleSheet, TextInput, Text, Alert } from "react-native";

export default function App() {

  let [textContent,setTextContent] = useState();
  
  let [textPreview,setTextPreview] = useState();

  function handleOnChangeText(text){

    setTextContent(text);
    setTextPreview(text);
  }

  function handlePressable(){

    if (textContent == "") {

      Alert.alert("Alerta","No se ha introducido nada");

    }else if (isNaN(textContent)) {

      Alert.alert("Alerta","Se ha introducido texto");

    }else if (!isNaN(textContent)) {

      Alert.alert("Alerta","Se ha introducido un número");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text) => handleOnChangeText(text)} placeholder="Inserta tu texto"/>
      <Text style={styles.textPreview}>{textPreview}</Text>
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
  textPreview:{
    fontSize: 30
  }
});
