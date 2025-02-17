import { StyleSheet, ScrollView, Pressable, Text, Image, View } from 'react-native';
import getData from '../services/services';
import { useState } from 'react';

const Screen2 = () => {
  const [data, setData] = useState([]);

  const getCats = async () => {
    let cats = await getData(
      'https://api.thecatapi.com/v1/images/search?limit=10'
    );
    setData(cats);
  };

  const Cats = () => {
    return data.map((element) => (
      <Image style={styles.image} source={{ uri: element.url }} />
    ));
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={getCats} style={styles.button}>
        <Text style={styles.buttonText}>Pulsa</Text>
      </Pressable>
      <ScrollView>
        <Cats />
      </ScrollView>
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
