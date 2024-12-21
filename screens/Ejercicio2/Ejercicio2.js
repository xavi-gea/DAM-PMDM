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
  const [hasPokeData, setHasPokeData] = useState(false);
  const [pokeData, setPokeData] = useState();

  useEffect(() => {

    const getPokeList = async () => {
    
      const pokeAPIData = await callAPI(currPokeURL);

      if (pokeAPIData != null) {

        setPokeData(pokeAPIData);

        setHasPokeData(true);
        
        setNextPokeURL(pokeAPIData.next);
        setPrevPokeURL(pokeAPIData.previous);
      
      }else{

        setHasPokeData(false);
      }
    };

    getPokeList();

  }, [currPokeURL]);

  const callAPI = async (urlToFetch) => {

    try {

      const response = await fetch(urlToFetch);

      if (response.ok) {

        return await response.json();

      }else{

        return null;
      }
      
    } catch (error) {
      
      console.error(error);
      return null;
    }
  }
  
  const getFrontImage = async (pokeURL) => {
    
    const frontImage = await callAPI(pokeURL);

    return frontImage != null ? frontImage.sprites.front_default : "";
  }

  const changePage = async (pageType) => {

    let newCurrentURL = "";
    
    newCurrentURL = (pageType == "next") ? nextPokeURL : prevPokeURL;

    if (newCurrentURL != "" && newCurrentURL != undefined) {
      
      setCurrPokeURL(newCurrentURL);
    }
  }
  
  return (
    <ScrollView>
      <View style={STYLES.page}>
        <Text style={{ fontSize: 30 }}>Pókemons</Text>
        <View style={STYLES.container}>
          {hasPokeData ? (pokeData.results.map(async (element, index) => (
              
            // onpress, call method and pass poke id obtained from element

            <Pokemon key={index} name={element.name} uri={await getFrontImage(element.url)}/>

          ))) : ("")}
        </View>
        <View style={STYLES.containerButtons}>
          <Pressable style={STYLES.button} onPress={() => changePage("prev")}>
            <Text style={STYLES.buttonText}>Anterior</Text>
          </Pressable>
          <Pressable style={STYLES.button} onPress={() => changePage("next")}>
            <Text style={STYLES.buttonText}>Siguiente</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const STYLES = StyleSheet.create({
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