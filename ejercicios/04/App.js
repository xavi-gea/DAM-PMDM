import { StyleSheet, View } from "react-native";

export default function App() {

  const colors = [
    [
      "red", 
      "blue", 
      "green"
    ],
    [
      "blue", 
      "green", 
      "red"
    ],
    [
      "green", 
      "red", 
      "blue"
    ]
  ];

  return (
    <View style={styles.container}>

      {colors.map((row, id) => (

        <View key={id.toString()} style={{ flexDirection: "row" }}>

          {row.map((color, id2) => (
            
            <View 
              key={id2.toString()}
              width={100}
              height={100}
              borderRadius={100 / 2}
              backgroundColor={color}
            />

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
