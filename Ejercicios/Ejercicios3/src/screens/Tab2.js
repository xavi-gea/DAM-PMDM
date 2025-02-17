import { Text, TextInput, View, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import getData from '../services/services';

export default function Tab2() {
  const [result, setResult] = useState([]);
  const [word, setWord] = useState('');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getPlayer('Lebron');
  }, []);

  const getPlayer = async (searchTerm) => {
    setWord('');
    const url = `https://api.balldontlie.io/v1/players?search=${searchTerm}`;
    const apiKey = '881c21ff-e5a1-4a57-bfde-b55e54f2ef77';
    const response = await getData(url, apiKey);

    let newArray = response.data.map(
      (element, index) =>
        (element =
          index +
          1 +
          './ ' +
          element.first_name +
          ' ' +
          element.last_name +
          ' - ' +
          element.team.full_name)
    );
    setResult(newArray);
  };

  const handleCharacters = (number) => {
    let newCurrent = current + number;
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
          <TextInput
            onChangeText={(text) => setWord(text)}
            style={{
              width: 385,
              color: 'white',
              fontSize: 30,
              backgroundColor: 'blue',
              textAlign: 'center',
              height: 55,
            }}
            value={word}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 5 }}>
          <Pressable onPress={() => getPlayer(word)} style={styles.button}>
            <Text style={styles.buttonText}>Pulsa</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 2 }}>
          <Text style={{ width: 385, color: 'black', fontSize: 20 }}>
            {result[current]}
          </Text>
        </View>
      </View>
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
    fontSize: 16,
  },
});
