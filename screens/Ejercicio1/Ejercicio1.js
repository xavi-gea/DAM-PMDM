import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';

import Rick from './Rick';
import Context from './Context';

export default function Ejercicio1() {

  const {chosenRicks, setChosenRicks} = useContext(Context);
  const {ricksSelected, setRicksSelected} = useContext(Context);
  const {ricksToShow, setRicksToShow} = useContext(Context);

  const {ricksUniqueKeys, setRicksUniqueKeys} = useContext(Context);
  // if tries failed or table completed, reset this ^

  const [rickData, setRickData] = useState();
  const [gameTable, setGameTable] = useState([3,4]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [remainingTries, setRemainingTries] = useState(3);
  const [ricksToMatch, setRicksToMatch] = useState(2);
  const [totalChosenRicks, setTotalChosenRicks] = useState([]);
  const [hasRicks, setHasRicks] = useState(false);

  useEffect(() => {

    if (chosenRicks.length > 0) {
      
      if (chosenRicks.every((rick,i,chosenRicks) => rick == chosenRicks[0])) {

        if (ricksSelected == ricksToMatch) {

          let currentTotalChosenRicks = [...totalChosenRicks];

          chosenRicks.forEach(rick => {
            
            currentTotalChosenRicks.push(rick);
          });

          setTotalChosenRicks(currentTotalChosenRicks);
          setRicksToShow(currentTotalChosenRicks);
          setChosenRicks([]);
          setRicksSelected(0);

          if (currentTotalChosenRicks.length == (gameTable[0] * gameTable[1])) {

            toNextLevel();            
          }
        }
  
      }else{

        resetLevelStates();

        let currentTries = remainingTries;

        if (currentTries != 1) {

          currentTries--;

          setRemainingTries(currentTries);
          
          alert(`Vaya! Te quedan ${currentTries} intentos`);

        }else{

          returnToFirstLevel();

          alert(`Vaya! Ya no te quedan intentos :(`);
        }
      }
    }
        
  }, [chosenRicks,totalChosenRicks]);

  const resetLevelStates = () => {

    // context
    setChosenRicks([]);
    setRicksSelected(0);
    setRicksToShow(["all"]);
    setRicksUniqueKeys([]);

    // states
    setTotalChosenRicks([]);
    setHasRicks(false);
  }

  const returnToFirstLevel = () => {

    setRemainingTries(3);

    setCurrentLevel(1);
    setGameTable([3,4]);
    setRicksToMatch(2);
  }

  const toNextLevel = () => {

    resetLevelStates();
    setRemainingTries(3);

    let newLevel = currentLevel;

    if (newLevel != 3) {

      if (newLevel == 1) {
        
        newLevel = 2;
        setGameTable([4,4]);

      }else if(newLevel == 2){

        newLevel = 3;
        setGameTable([3,4]);
        setRicksToMatch(3);
      }

      setCurrentLevel(newLevel);

      alert(`Felicidades! A por el nivel ${newLevel}`);

    }else{

      returnToFirstLevel();
      
      alert(`Felicidades, has ganado el juego!`);
    }
  }

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
    
    //await new Promise(resolve => setTimeout(resolve, 5000));

    const rickAPIData = await callRickAPI();      

    if (rickAPIData != null) {
      
      setRickData(getBoardContent(rickAPIData));
      setHasRicks(true);

      await new Promise(resolve => setTimeout(resolve, 5000));

      setRicksToShow([]);
    
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
          ? rickData.map((row, rowIndex) => (

            <View key={rowIndex} style={{ flexDirection: 'row' }}>

              {row.map((rick, rickIndex) => (

                <Rick 
                  key = {`${rowIndex}-${rickIndex}`}
                  propKey = {`${rowIndex}-${rickIndex}`}
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