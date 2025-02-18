import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from '../Context';
import { getData } from '../../services/services';


const Word = () => { 
  const { word, setWord} = useContext(Context);
  const [definitions, setDefinitions] = useState([]);
  
  useEffect(() => {
    getWord(word);
  }, []);

  const getWord = async (searchTerm) => {
    const response = await getData(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );
    let definitions = response[0].meanings[0].definitions.map(
      (element, index) =>
        (element = index + 1 + './ ' + element.definition + ' ')
    );
    setDefinitions(definitions);
  };

  return (
    <View style={styles.layout}>
    {definitions.map(element => 
      <Text style={styles.buttonText}>{element}</Text>
    )}
    </View>
  );
};

const styles = StyleSheet.create({ 
  layout: {
    flex: 1,
    justifyContent: 'center', padding: 8,
  },
    buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Word;