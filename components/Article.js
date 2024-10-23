import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Article(){

    let content = {
        paragraphOne: "Párrafo 1",
        paragraphTwo: "Párrafo 2",
        title: "Esto es un título"
      }

    return (
        <View style={styles.container}>
        <Text>{content.title}</Text>
        <Image 
          style={styles.logo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}>
        </Image>
        <Text>{content.paragraphOne}</Text>
        <Image 
          style={styles.logo}
          source={require('../assets/favicon.png')}>
        </Image>
        <Text>{content.paragraphTwo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "cyan",
      alignItems: "center",
      justifyContent: "center",
    },
    title:{
      fontSize: 12,
      fontWeight:"bold",
      fontStyle:"italic",
      textDecorationLine:"underline"
    },
    logo: {
      width: 66,
      height: 58,
    }
  });
  