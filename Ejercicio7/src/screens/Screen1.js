import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image
} from 'react-native';
import getData from '../services/services';
import { useState } from 'react';


const Screen1 = () => {
  const [name, setName] = useState();
  const [currency, setCurrency] = useState();
  const [area, setArea] = useState();
  const [population, setPopulation] = useState();
  const [photo, setPhoto] = useState();
  const [capital, setCapital] = useState();


  const getInfo = async () => {
    let info = await getData(
      'https://restcountries.com/v3.1/name/spain'
    );
    setArea(info[0].area);
    setPopulation(info[0].population);
    setCapital(info[0].capital[0])
    setPhoto(info[0].flags.png)
    setCurrency(info[0].currencies.EUR.name );
    setName(info[0].name.nativeName.spa.official);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={getInfo} style={styles.button}>
        <Text style={styles.buttonText}>Mostrar información</Text>
      </Pressable>
      <Image style={styles.image} source={{ uri: photo }} />
      <Text>País: {name}</Text>
      <Text>Capital: {capital}</Text>
      <Text>Población: {population}</Text>
      <Text>Area: {area}</Text>
      <Text>Moneda: {currency}</Text>
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
