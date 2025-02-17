import { Pressable, Text, Image, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [photo, setPhoto] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/search/users?q=Java'
      );
      if (response.ok) {
        const resp = await response.json();
        setPhoto(resp.items[0].avatar_url);
      }
    } catch (error) {
      console.error(error);
    }
  };

 return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photo }} />
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