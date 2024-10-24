import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {

  const squareColors = [
    ["blue","blue"],
    ["red","blue"],
    ["red","red"],
  ];

  return (
    <View style={styles.container}>

      {squareColors.map((row, id) => (

        <View key={id.toString()} style={{ flexDirection: "row" }}>

          {row.map((color, id2) => (

            <View key={id2.toString()} width={100} height={100} backgroundColor={color}/>

          ))}

        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
