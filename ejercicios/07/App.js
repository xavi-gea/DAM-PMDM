import { useState } from "react";
import { View, Pressable, Text, StyleSheet, useWindowDimensions } from 'react-native';

let cycleElements = true;
let squareSize = 200;

export default function App() {

  const screenWidth = useWindowDimensions().width;

  const [backColor,setBackColor] = useState('yellow');
  const [squareColor,setSquareColor] = useState('green');
  const [squareWidth,setSquareWidth] = useState(squareSize);
  const [squareHeight,setSquareHeight] = useState(squareSize);

  function handleOnPress(){

    cycleElements = !cycleElements;

    if(cycleElements){

      setBackColor('yellow')
      setSquareColor('green')

    }else{

      setBackColor('green')
      setSquareColor('yellow')
    }

    if (squareWidth <= screenWidth) {
      
      setSquareWidth(squareSize+=10)
      setSquareHeight(squareSize+=10)
    }
  }

  return (
    <View style={[styles.container,{backgroundColor:backColor}]}>
      <View style={[styles.square,{backgroundColor:squareColor},{width:squareWidth},{height:squareHeight}]} />
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
