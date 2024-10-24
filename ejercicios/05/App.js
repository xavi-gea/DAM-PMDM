import { StyleSheet, View } from "react-native";

export default function App() {
  const midCircles = [
    [
      {
        width: 100, 
        height: 100, 
        borderTopLeftRadius: 150, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
        backgroundColor: "red"
      },
      {
        width: 100, 
        height: 100, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 150, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
        backgroundColor: "blue"
      }
    ],
    [      
      {
        width: 100, 
        height: 100, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 150, 
        borderBottomRightRadius: 0, 
        backgroundColor: "blue"
      },
      {
        width: 100, 
        height: 100, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 150, 
        backgroundColor: "red"
      }
    ],
    [      
      {
        width: 75, 
        height: 75, 
        borderTopLeftRadius: 150, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
        backgroundColor: "red"
      },
      {
        width: 75, 
        height: 75, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 150, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
        backgroundColor: "blue"
      }
    ],
    [      
      {
        width: 75, 
        height: 75, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 150, 
        borderBottomRightRadius: 0, 
        backgroundColor: "blue"
      },
      {
        width: 75, 
        height: 75, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 150, 
        backgroundColor: "red"
      }
    ],
    [      
      {
        width: 50, 
        height: 50, 
        borderTopLeftRadius: 150, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
        backgroundColor: "red"
      },
      {
        width: 50, 
        height: 50, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 150, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
        backgroundColor: "blue"
      }
    ],
    [      
      {
        width: 50, 
        height: 50, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 150, 
        borderBottomRightRadius: 0, 
        backgroundColor: "blue"
      },
      {
        width: 50, 
        height: 50, 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 150, 
        backgroundColor: "red"
      }
    ]
  ];

  return (
    <View style={styles.container}>

      {midCircles.map((row, id) => (

        <View key={id.toString()} style={{ flexDirection: "row" }}>

          {row.map((section, id2) => (

              <View
                key={id2.toString()}
                width={section.width}
                height={section.height}
                borderTopLeftRadius={section.borderTopLeftRadius}
                borderTopRightRadius={section.borderTopRightRadius}
                borderBottomLeftRadius={section.borderBottomLeftRadius}
                borderBottomRightRadius={section.borderBottomRightRadius}
                backgroundColor={section.backgroundColor}
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
