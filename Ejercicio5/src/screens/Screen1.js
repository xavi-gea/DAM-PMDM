import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import getData from '../services/services';
import { useState } from 'react';


const Screen1 = () => {
  const [data, setData] = useState();

  const getDatos = async () => {
    let cats = await getData(
      'https://api.thecatapi.com/v1/images/search?size=full'
    );
    setData(cats[0].url);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data }} />
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

export default Screen1;
