import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { useState, useEffect } from 'react';
import getData from '../services/services';

export default function Tab3() {
  const [current, setCurrent] = useState(0);
  const [character, setCharacter] = useState([
    { name: '--', species: '--', status: '--', image: '--' },
  ]);

  useEffect(() => {
    getRickAndMorty();
  }, []);

  const getRickAndMorty = async () => {
    const response = await getData('https://rickandmortyapi.com/api/character');
    setCharacter(response.results);
    setCurrent(0);
  };

  const handleCharacters = (number) => {
    let newCurrent = current + number;
    if (newCurrent > character.length - 1) {
      setCurrent(0);
    } else if (newCurrent < 0) {
      setCurrent(character.length - 1);
    } else {
      setCurrent(newCurrent);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ width: 450, height: 300 }}
        source={{ uri: character[current].image }}></Image>
      <Text>{character[current].name}</Text>
      <Text>{character[current].species}</Text>
      <Text>{character[current].status}</Text>
      <View style={{ padding: 0, justifyContent: 'center', flexDirection: 'row' }}>
        <Pressable onPress={() => handleCharacters(-1)} style={styles.button}>
          <Text style={styles.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable onPress={() => handleCharacters(1)} style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </Pressable>
      </View>
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
    fontSize: 12,
  },
});
