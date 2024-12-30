import { View, Pressable, ScrollView, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import CallAPI from '../../libraries/CallAPI';
import Pokemon from './Pokemon';

export default function Ejercicio2() {

  const [prevPokeURL, setPrevPokeURL] = useState("");
  const [currPokeURL, setCurrPokeURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPokeURL, setNextPokeURL] = useState("");
  const [hasPokeData, setHasPokeData] = useState(false);
  const [pokeData, setPokeData] = useState();

  useEffect(() => {

    const getPokeList = async () => {
    
      const pokeAPIData = await CallAPI(currPokeURL);

      if (pokeAPIData != null) {

        setPokeData(pokeAPIData);

        setHasPokeData(true);

        const nextURL = pokeAPIData.next;
        nextURL != null ? setNextPokeURL(nextURL) : setNextPokeURL("https://pokeapi.co/api/v2/pokemon/");

        const prevURL = pokeAPIData.previous;
        prevURL != null ? setPrevPokeURL(prevURL) : setPrevPokeURL("https://pokeapi.co/api/v2/pokemon?offset=1282");
      
      }else{

        setHasPokeData(false);
      }
    };

    getPokeList();

  }, [currPokeURL]);
  
  const getImagesURI = async (pokeURL) => {

    const pokemon = await CallAPI(pokeURL);

    const pokeImages = [];

    if (pokemon != null) {

      pokeImages.push(
        pokemon.sprites.front_default,
        pokemon.sprites.back_default,
        pokemon.sprites.back_shiny,
        pokemon.sprites.front_shiny
      );
    }

    return pokeImages;
  }

  const changePage = async (pageType) => {

    let newCurrentURL = "";
    
    newCurrentURL = (pageType == "next") ? nextPokeURL : prevPokeURL;
      
    setCurrPokeURL(newCurrentURL);
  }
  
  return (
    <ScrollView>
      <View style={STYLES.page}>
        <Text style={{ fontSize: 30 }}>Pókemons</Text>
        <View style={STYLES.container}>
          {hasPokeData
            ? pokeData.results.map(async (pokemon, index) => (

                <Pokemon
                  key={index}
                  name={pokemon.name}
                  uri={await getImagesURI(pokemon.url)}
                />
              ))
            : ""}
        </View>
      </View>
      <View style={STYLES.containerButtons}>
        <Pressable style={STYLES.button} onPress={() => changePage("prev")}>
          <Text style={STYLES.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable style={STYLES.button} onPress={() => changePage("next")}>
          <Text style={STYLES.buttonText}>Siguiente</Text>
        </Pressable>
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