import { useState } from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";

let cycle = true;

export default function App() {

  const [color, setColor] = useState('green');
  const [title, setTitle] = useState('My Title');
  const [filePath, setFilePath] = useState(require('./assets/icon.png'));


  function handleOnPress(){

    if(cycle){

      setColor('yellow')
      setTitle('My New Title')
      setFilePath(require('./assets/jake-icon.jpg'))

    }else{

      setColor('green')
      setTitle('My Title')
      setFilePath(require('./assets/icon.png'))
    }

    cycle = !cycle

    //color == 'green' ? setColor('yellow') : setColor('green')
  }

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={filePath} />
      <Pressable onPress={handleOnPress}>
        <Text style={styles.text}>Púlsame!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    height: 40,
    width: 80,
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 6,
  },
});