import {
  View,
  Pressable,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import Pokemon from './Pokemon';
import { useEffect, useState } from 'react';

export default function Ejercicio2() {

  const [prevPokeURL, setPrevPokeURL] = useState("");
  const [currPokeURL, setCurrPokeURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPokeURL, setNextPokeURL] = useState("");
  const [pokeData, setPokeData] = useState();

  useEffect( () => {

    queryAPI();

  }, []);

  useEffect(() => {

    if (pokeData !== undefined) {
      
      setNextPokeURL(pokeData.next);
      setPrevPokeURL(pokeData.previous);
    }

  }, [pokeData]);

  const queryAPI = async() => {

    let pokeAPIData = await callPokeAPI(currPokeURL);

    setPokeData(pokeAPIData);
  };

  const getFrontImage = (pokeURL) => callPokeAPI(pokeURL).sprites.front_default;

  const callPokeAPI = async (urlToFetch) => {

    const response = await fetch(urlToFetch)
      .then(res => res.json())
      
    return response;
  }
  
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={{ fontSize: 30 }}>Pókemons</Text>
        <View style={styles.container}>
          {pokeData.results.map((element, index) => (
              
            <Pokemon key={index} name={element.name} uri={getFrontImage(element.url)}/>

          ))}
        </View>
        <View style={styles.containerButtons}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Anterior</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    marginTop: 35,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
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
    fontSize: 14,
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});