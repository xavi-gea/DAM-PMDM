import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import getData from '../services/services';

export default function Tab2() {
  const [image, setImage] = useState();

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const response = await getData(
      'https://api.thecatapi.com/v1/images/search?size=full'
    );
    setImage(response[0].url);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Pressable onPress={getImage} style={styles.button}>
        <Text style={styles.buttonText}>Pulsa</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    backgroundColor: 'black',
    width: '60%',
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
  image: {
    width: 375,
    height: 300,
  },
});
