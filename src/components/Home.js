import { Button, StyleSheet, Text, View } from "react-native";

export default function Home(props) {
    
  return(
    <View style={styles.layout}>
        <Text style={styles.title}>-_-</Text>

        <Button onPress={() => props.navigation.navigate('ScreenAPI')} title="Pulsar si se activa navegación stack"/>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});