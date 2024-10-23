import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from 'react-native';

let cycleElements = true;

export default function App() {

  const [backColor,setBackColor] = useState('green');
  const [squareColor,setSquareColor] = useState('yellow');
  const [squareWidth,setSquareWidth] = useState(200);

  function handleOnPress(){

    cycleElements = !cycleElements;

    if(cycleElements){

      setBackColor('green')
      setSquareColor('yellow')
      setSquareWidth(200)

    }else{

      setBackColor('yellow')
      setSquareColor('green')
      setSquareWidth(300)
    }
  }

  return (
    <View style={[styles.container,{backgroundColor:backColor}]}>
      <View style={[styles.square,{backgroundColor:squareColor},{width:squareWidth}]} />
      <Pressable onPress={handleOnPress}>
        <Text style={styles.text}>Púlsame!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    marginTop: -6,
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
  text: {
    height: 40,
    width: 80,
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 6,
  },
});
