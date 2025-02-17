import { StyleSheet, Pressable, Text, Image, View } from 'react-native';
import getData from '../services/services';
import { useState } from 'react';

const Screen2 = () => {
  const [data, setData] = useState([]);

  const getDatos = async () => {
    let catOne = await getData(
      'https://api.thecatapi.com/v1/images/search?size=full'
    );
    let catTwo = await getData(
      'https://api.thecatapi.com/v1/images/search?size=full'
    );
    let myArray = [...data];
    myArray[0] = catOne[0].url;
    myArray[1] = catTwo[0].url;
    setData(myArray);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data[0] }} />
      <Image style={styles.image} source={{ uri: data[1] }} />
      <Pressable onPress={getDatos} style={styles.button}>
        <Text style={styles.buttonText}>Pulsa</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  image: {
    width: 375,
    height: 300,
  },
  button: {
    backgroundColor: 'black',
    width: '70%',
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

export default Screen2;
