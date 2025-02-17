import { Image, Text, Pressable, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [photo, setPhoto] = useState();
  const [photoTwo, setPhotoTwo] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        ' https://api.thecatapi.com/v1/images/search?limit=10'
      );
      if (response.ok) {
        console.log(data)
        const data = await response.json();
        setPhoto(data[0].url);
        setPhotoTwo(data[1].url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photo }} />
      <Image style={styles.image} source={{ uri: photoTwo }} />
      <Pressable onPress={getData} style={styles.button}>
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
