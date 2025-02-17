import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from './Context';
import getData from '../services/services';

export default function Screen2() {
  const { name, setName } = useContext(Context);
  const [result, setResult] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getWord(name);
  }, []);

  const getWord = async (searchTerm) => {
    const response = await getData(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );
    let definitions = response[0].meanings[0].definitions.map(
      (element, index) =>
        (element = index + 1 + './ ' + element.definition + ' ')
    );
    setResult(definitions);
  };

  const handleButton = (number) => {
    let newCurrent = number + current;
    if (newCurrent > result.length - 1) {
      setCurrent(0);
    } else if (newCurrent < 0) {
      setCurrent(result.length - 1);
    } else {
      setCurrent(newCurrent);
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 2 }}>
          <Text style={{ width: 385, color: 'black', fontSize: 20 }}>
            {result[current]}
          </Text>
        </View>
      </View>
      <View style={{ padding: 0, justifyContent: 'center', flexDirection: 'row' }}>
          <Pressable onPress={() => handleButton(-1)} style={styles.button}>
            <Text style={styles.buttonText}>Anterior</Text>
          </Pressable>
          <Pressable onPress={() => handleButton(1)} style={styles.button}>
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
    fontSize: 16,
  },
});
