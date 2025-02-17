import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useContext, useState } from 'react';
import Context from './Context';
import { SelectList } from 'react-native-dropdown-select-list';

export default function Screen1({ navigation }) {
  const { song, setSong } = useContext(Context);
  const [selected, setSelected] = useState('');

  const data = [
    { key: '1', value: '01 - Hent I' },
    { key: '2', value: '02 - Pern' },
    { key: '3', value: '03 - Hent II' },
    { key: '4', value: '04 - Porz Goret' },
  ];

  const onSubmit = () => {
    let path;
    if (selected === '01 - Hent I') {
      path = require('../audio/1.mp3');
    } else if (selected === '02 - Pern') {
      path = require('../audio/2.mp3');
    } else if (selected === '03 - Hent II') {
      path = require('../audio/3.mp3');
    } else if (selected === '04 - Porz Goret') {
      path = require('../audio/4.mp3');
    }

    setSong(path);
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <Text>Canción:</Text>
      <View style={{ padding: 2 }}>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
      </View>
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '60%',
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
