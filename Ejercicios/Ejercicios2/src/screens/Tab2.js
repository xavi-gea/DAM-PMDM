import {
  Pressable,
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { useState, useEffect } from 'react';
import getData from '../services/services';

export default function Tab2() {
  const [current, setCurrent] = useState(0);
  const [character, setCharacter] = useState([
    { name: '--', species: '--', status: '--', image: '--' },
  ]);

  useEffect(() => {
    getRickAndMorty();
  }, []);

  const getRickAndMorty = async () => {
    const response = await getData('https://rickandmortyapi.com/api/character');
    
    let newArray = [0, 1, 10, 13].map(
      (element) =>
        (element = {
          name: response.results[element].name,
          species: response.results[element].species,
          status: response.results[element].status,
          image: response.results[element].image,
        })
    );
    setCharacter(newArray);
    setCurrent(0);
  };

  const handleNext = () => {
    current === 3 ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ width: 450, height: 300 }}
        source={{ uri: character[current].image }}></Image>
      <Text>{character[current].name}</Text>
      <Text>{character[current].species}</Text>
      <Text>{character[current].status}</Text>
      <ScrollView>
        <Pressable onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: 100,
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
