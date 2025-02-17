import { Text, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from './Context';
import getData from '../services/services';

export default function Screen2() {
  const { name, setName } = useContext(Context);
  const [result, setResult] = useState();

  useEffect(() => {
    getWord(name);
  }, []);

  const getWord = async (searchTerm) => {
    const response = await getData(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );
    let definition = response[0].meanings[0].definitions;
    let newString = definition[0].definition;

    setResult(newString);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ padding: 2 }}>
          <Text style={{ width: 385, color: 'black', fontSize: 20 }}>
            {result}
          </Text>
        </View>
      </View>
    </View>
  );
}
