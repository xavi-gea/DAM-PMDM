import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState();

  const getCats = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?size=full'
      );
      if (response.ok) {
        const resp = await response.json();
        setData(resp[0].url);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data }} />
      <Pressable onPress={getCats} style={styles.button}>
        <Text style={styles.buttonText}>Púlsame</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  image: {
    width: 375,
    height: 300,
  },
  button: {
    backgroundColor: 'black',
    width: '30%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
