import { useState } from "react";
import { View, Pressable, Text, StyleSheet, useWindowDimensions } from 'react-native';

let cycleElements = true;
let currentSquareSize = 200;
const initialSquareSize = currentSquareSize;
let growSquare = true;

export default function App() {

  const screenWidth = useWindowDimensions().width;

  const [backColor,setBackColor] = useState('yellow');
  const [squareColor,setSquareColor] = useState('green');
  const [squareWidth,setSquareWidth] = useState(currentSquareSize);
  const [squareHeight,setSquareHeight] = useState(currentSquareSize);

  function handleOnPress(){

    cycleElements = !cycleElements;

    if(cycleElements){

      setBackColor('yellow')
      setSquareColor('green')

    }else{

      setBackColor('green')
      setSquareColor('yellow')
    }

    if (squareWidth >= screenWidth) {
        
      growSquare = false;

    }else if (squareWidth <= initialSquareSize) {
      
      growSquare = true;
    }

    if (growSquare) {
      
      setSquareWidth(currentSquareSize+=10)
      setSquareHeight(currentSquareSize+=10)

    }else{

      setSquareWidth(currentSquareSize-=10)
      setSquareHeight(currentSquareSize-=10)
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
