import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import Rick from './Rick';

export default function Ejercicio1() {

    const [rickData, setRickData] = useState();
    const [gameTable, setGameTable] = useState([3,4]);
    const [hasRicks, setHasRicks] = useState(false);
  
    const callRickAPI = async () => {
  
      try {

        const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomCharactersID((gameTable[0] * gameTable[1]) / 2)}`);
  
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

    const getRicks = async () => {

      setTimeout(1000);
      const rickAPIData = await callRickAPI();      

      if (rickAPIData != null) {

        console.log(getBoardContent(rickAPIData));
        
        setRickData(getBoardContent(rickAPIData));
        setHasRicks(true);
      
      }else{

        setHasRicks(false);
      }
    }

    const getBoardContent = (ricks) => {

      const doubleRicks = ricks.concat(ricks);

      doubleRicks.sort(() => Math.random() - 0.5);

      let boardContent = [];

      let currentRick = 0;

      for (let i = 0; i < gameTable[0]; i++) {

        let rowContent = [];
        
        for (let j = 0; j < gameTable[1]; j++) {
          
          rowContent.push({
            "id": doubleRicks[currentRick].id,
            "url": doubleRicks[currentRick].image
          });

          currentRick++;
        }

        boardContent.push(rowContent);
      }

      return boardContent;
    }

    const handleOnPress = async () => {

      await getRicks();
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

          {hasRicks 
            ? rickData.map((row, index) => (

              <View key={index} style={{ flexDirection: 'row' }}>

                {row.map((rick, index) => (

                  <Rick 
                    key = {index}
                    id = {rick.id}
                    uri = {rick.url}
                  />
                ))}
  
              </View>
            )) 
          
          : ""}

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