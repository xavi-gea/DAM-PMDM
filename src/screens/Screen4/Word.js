import { StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from '../Context';
import { getData } from '../../services/services';
import { Card, Player } from '../../components/Components'

const Word = () => {
  const { word, setWord } = useContext(Context);
  const [result, setResult] = useState([]);

  useEffect(() => {
    data(word);
  }, []);

  const data = async (searchTerm) => {
    const response = await getData(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
    setResult(response.results);
  };

  return (
    <ScrollView style={styles.layout}>
      {result.map((element) => (
        <>
        <Card image={element.image}/>
        <Player name={element.name}/>
        </>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  }
});

export default Word;
