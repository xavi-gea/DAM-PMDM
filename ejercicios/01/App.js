import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {

  const squares = [
    {color: "blue",size:100},
    {color: "red",size:200},
  ];

  return (

    <View style={styles.container}>

      {squares.map((square, id) => (

        <View key={id.toString()} style={{ flexDirection: "row" }}>
          <View key={id.toString()} width={square.size} height={square.size} backgroundColor={square.color} />
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
