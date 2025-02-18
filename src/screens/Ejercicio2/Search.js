import { useContext, useState } from "react";
import { Button, Text, TextInput } from "react-native";
import Context from "../../services/Context";


export function Search(props) {

  const {songSearchText, setSongSearchText} = useContext(Context);
    
  return (
    <>
      <TextInput value={songSearchText} onChangeText={setSongSearchText} placeholder="Termino de Búsqueda" />
      <Button onPress={() => props.navigation.navigate('AudioRecorder')} title="Buscar"/>
    </>
  );
}