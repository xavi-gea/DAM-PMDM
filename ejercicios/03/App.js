import { useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";

export default function App() {

  let [squareSize, setSquareSize] = useState(200);
  let [squareColor, setSquareColor] = useState("yellow");
  
  let currentSquareSize;

  function increaseSize(sizeIncrease){

    currentSquareSize = squareSize;

    if (sizeIncrease) {

      currentSquareSize += 20;
      setSquareColor("green");

    }else{

      currentSquareSize -= 20;
      setSquareColor("yellow");
    }

    setSquareSize(currentSquareSize);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => increaseSize(true)} style={[styles.square, {backgroundColor: squareColor, width: squareSize, height: squareSize}]} />
      <Pressable onPress={() => increaseSize(false)} style={[styles.square, {backgroundColor: squareColor, width: squareSize, height: squareSize}]} />
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
  square: {
    marginTop: -6,
    width: 200,
    height: 200,
    backgroundColor: "yellow",
  },
});
