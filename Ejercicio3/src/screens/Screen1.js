import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { useContext, useState } from 'react';
import Context from './Context';

export default function Screen1({ navigation }) {
  const [text, setText] = useState('');
  const { song, setSong } = useContext(Context);

  const onSubmit = () => {
    let path;
    if(text === '1'){
      path = require('../audio/1.mp3');
    } else if (text === '2'){
      path = require('../audio/2.mp3');
    } else if (text === '3'){
      path = require('../audio/3.mp3');
    } else if (text === '4'){
      path = require('../audio/4.mp3');
    }
    
    setSong(path);
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <Text>Término de búsqueda: {text}</Text>
      <View style={{ padding: 2 }}>
        <TextInput
          onChangeText={(text) => setText(text)}
          style={{
            width: 385,
            color: 'white',
            fontSize: 30,
            backgroundColor: 'blue',
            textAlign: 'center',
            height: 55,
          }}
          value={text}
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