import { useState } from "react";
import { Text, Pressable, Image, View, StyleSheet } from "react-native";

export default function App() {

  let [text1, setText1] = useState("Texto 1");
  let [image1, setImage1] = useState(require("./assets/image1.png"));

  let [text2, setText2] = useState("Texto 2");
  let [image2, setImage2] = useState(require("./assets/image2.png"));

  function changeContent(pressableParameter) {
    switch (pressableParameter) {

      case 1:

        if (text1 == "Texto 1") {

          setText1("Texto 1 cambiado");
          setImage1(require("./assets/image2.png"));

        } else {

          setText1("Texto 1");
          setImage1(require("./assets/image1.png"));
        }

        break;

      case 2:

        if (text2 == "Texto 2") {

          setText2("Texto 2 cambiado");
          setImage2(require("./assets/image1.png"));

        } else {

          setText2("Texto 2");
          setImage2(require("./assets/image2.png"));
        }

        break;
    }
  }

  return (
    <View style={styles.containerRow}>
      <Pressable onPress={() => changeContent(1)}>
        <Image style={styles.image} source={image1} />
        <Text>{text1}</Text>
      </Pressable>
      <Pressable onPress={() => changeContent(2)}>
        <Image style={styles.image} source={image2} />
        <Text>{text2}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRow: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
});
