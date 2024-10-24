import { StyleSheet, View } from "react-native";

export default function App() {

  const shapes = [
    [
      {
        width: 0, 
        height: 0, 
        backgroundColor: "transparent", 
        borderStyle: "solid", 
        borderLeftWidth: 50, 
        borderRightWidth: 50, 
        borderBottomWidth: 100, 
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "blue"
      }
    ],
    [
      {
        width: 100, 
        height: 100, 
        backgroundColor: "blue", 
      }
    ],
    [
      {
        width: 100, 
        height: 100, 
        backgroundColor: "blue", 
      },
      {
        width: 100, 
        height: 100, 
        backgroundColor: "blue", 
      }
    ]
  ];

  return (
    <View style={styles.container}>

      {shapes.map((row, id) => (

        <View key={id.toString()} style={{ flexDirection: "row" }}>

          {row.map((shape, id2) => (
            
            <View 
              key={id2.toString()}
              width={shape.width}
              height={shape.height}
              backgroundColor={shape.backgroundColor}
              borderStyle={shape.borderStyle}
              borderLeftWidth={shape.borderLeftWidth}
              borderRightWidth={shape.borderRightWidth}
              borderBottomWidth={shape.borderBottomWidth}
              borderLeftColor={shape.borderLeftColor}
              borderRightColor={shape.borderRightColor}
              borderBottomColor={shape.borderBottomColor}
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
