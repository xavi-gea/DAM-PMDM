import { Text, TextInput, View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import getData from '../services/services';

export default function Tab1() {
  const [result, setResult] = useState([]);
  const [word, setWord] = useState('');

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
        <ScrollView>
          {result.map((value, index) => (
            <Text
              key={index.toString()}
              style={{ width: 385, color: 'black', fontSize: 20 }}>
              {' '}
              {value}{' '}
            </Text>
          ))}
        </ScrollView>
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
