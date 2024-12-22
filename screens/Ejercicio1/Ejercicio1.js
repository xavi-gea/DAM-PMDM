import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import Rick from './Rick';

export default function Ejercicio1() {

    const [rickData, setRickData] = useState();
    const [characterAmount, setCharacterAmount] = useState(6);
  
    const callRickAPI = async () => {
  
      try {

        const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomCharactersID(characterAmount)}`);
  
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

    const handleOnPress = async () => {

      setTimeout(1000);
      const rickAPIData = await callRickAPI();

      if (rickAPIData != null) {
        
        setRickData(rickAPIData);

        // todo here?
      }
    }

    const getRandomCharactersID = (iterations) => {

      const getRandomIntInclusive = (min, max) => {

        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
      
        return Math.floor(Math.random() * ((maxFloored - minCeiled) + 1) + minCeiled);
      }

      return Array.from({length: iterations}, () => getRandomIntInclusive(1,826)).toString();
    }
  
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 80,
      }}>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }} onPress={handleOnPress}>Memory</Text>

      <View style={{ marginTop: 5 }}>

        {/* map here? */}

          <View style={{ flexDirection: 'row' }}>
            
            {/* map here? */}

              <Rick/>
              <Rick/>
              <Rick/>
              <Rick/>

          </View>
      </View>
    </View>
  );
}

const STYLES = StyleSheet.create({
  tinyPhoto: {
    width: 80,
    height: 80,
  },
});