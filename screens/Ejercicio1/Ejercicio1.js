import { Text, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';

import CallAPI from '../../libraries/CallAPI';
import Rick from './Rick';
import Context from './Context';

export default function Ejercicio1() {

  const {chosenRicksIDs, setChosenRicksIDs} = useContext(Context);
  const {setRicksToShow} = useContext(Context);

  const {setRicksUniqueKeys} = useContext(Context);

  const [rickData, setRickData] = useState();
  const [gameTable, setGameTable] = useState({rows: 3, cols: 4});
  const [gameLevel, setGameLevel] = useState(1);
  const [remainingTries, setRemainingTries] = useState(3);
  const [ricksAmountToMatch, setRicksAmountToMatch] = useState(2);
  const [totalChosenRicksIDs, setTotalChosenRicksIDs] = useState([]);
  const [hasRicks, setHasRicks] = useState(false);

  useEffect(() => {

    const checkChosenRicks = () => {

      if (chosenRicksIDs.length > 0) {

        if (chosenRicksIDs.every((rickID,i,chosenRicksIDs) => rickID == chosenRicksIDs[0])) {
    
          if (chosenRicksIDs.length == ricksAmountToMatch) {
    
            let totalRicksIDs = [...totalChosenRicksIDs];
    
            chosenRicksIDs.forEach(rickID => {
              
              totalRicksIDs.push(rickID);
            });
    
            setTotalChosenRicksIDs(totalRicksIDs);
            setRicksToShow(totalRicksIDs);
            setChosenRicksIDs([]);
    
            if (totalRicksIDs.length == (gameTable.rows * gameTable.cols)) {
    
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
    }

    checkChosenRicks();
        
  }, [chosenRicksIDs]);

  const resetLevelStates = () => {

    setChosenRicksIDs([]);
    setRicksToShow(["all"]);
    setRicksUniqueKeys([]);

    setTotalChosenRicksIDs([]);
    setHasRicks(false);
  }

  const returnToFirstLevel = () => {

    setRemainingTries(3);

    setGameLevel(1);
    setGameTable({rows: 3, cols: 4});
    setRicksAmountToMatch(2);
  }

  const toNextLevel = () => {

    resetLevelStates();
    setRemainingTries(3);

    let newGameLevel = gameLevel;

    if (newGameLevel != 3) {

      if (newGameLevel == 1) {
        
        newGameLevel = 2;
        setGameTable({rows: 4, cols: 4});

      }else if(newGameLevel == 2){

        newGameLevel = 3;
        setGameTable({rows: 3, cols: 4});
        setRicksAmountToMatch(3);
      }

      setGameLevel(newGameLevel);

      alert(`Felicidades! A por el nivel ${newGameLevel}`);

    }else{

      returnToFirstLevel();
      
      alert(`Felicidades, has ganado el juego!`);
    }
  }

  const setUpTable = async () => {

    const rickAPIData = await CallAPI(`https://rickandmortyapi.com/api/character/${getRandomCharactersID((gameTable.rows * gameTable.cols) / ricksAmountToMatch)}`);      

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
    
    let multipleRicks = ricks.concat(ricks);

    if (gameLevel == 3) {
      
      multipleRicks = multipleRicks.concat(ricks);
    }

    multipleRicks.sort(() => Math.random() - 0.5);

    let boardContent = [];

    let currentRick = 0;

    for (let i = 0; i < gameTable.rows; i++) {

      let rowContent = [];
      
      for (let j = 0; j < gameTable.cols; j++) {
        
        rowContent.push({
          "id": multipleRicks[currentRick].id,
          "url": multipleRicks[currentRick].image
        });

        currentRick++;
      }

      boardContent.push(rowContent);
    }

    return boardContent;
  }

  const handleOnPress = async () => {
    
    await setUpTable();
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