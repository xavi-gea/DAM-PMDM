import { StyleSheet, Text, Button, View } from "react-native";
import { CallAPI } from "../services/services";
import { useEffect, useState } from "react";

export default function ScreenAPI(props) {

  const [responseText, setResponseText] = useState("");

  useEffect(() => {

    const response = getAPIResult();

    setResponseText(response);

  },[]);

  async function getAPIResult(){

    const APIContent = await CallAPI('https://api.adviceslip.com/advice');

    return APIContent.slip.advice;
  }

  const owo = (

    <View style={styles.layout}>
      <Text style={styles.title}>{responseText}</Text>
      <Button onPress={() => props.navigation.goBack()} title="Pulsar para volver si se activa navegación stack"/>
    </View>
  );
    
  return owo;
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});