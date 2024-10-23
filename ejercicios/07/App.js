import { useState } from "react";
import { Pressable, View, StyleSheet, TextInput, Text, Alert } from "react-native";

export default function App() {

  let [textResult,setTextResult] = useState();
  let [textInputContent,setTextInputContent] = useState("");

  function handlePressable(){

    if (textInputContent == "") {

      Alert.alert("Alerta","No se ha introducido nada");
      setTextInputContent("");

    }else{

      if (validarDNI(textInputContent)) {

        setTextResult("DNI correcto: " + textInputContent);
  
      }else{

        Alert.alert("Alerta","Introduce un DNI con ocho cifras y una letra");
        setTextInputContent("");
      }
    }
  }

  function validarDNI(input){

    let isValid = false;

    if (input.length == 9) {
      
      if (!isNaN(input.substring(0,8)) && isNaN(input.substring(8,9))) {
        
        isValid = true;
      }
    }

    return isValid;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Validador DNI</Text>
      <TextInput onChangeText={(text) => setTextInputContent(text)} placeholder="Inserta DNI" value={textInputContent}/>
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
