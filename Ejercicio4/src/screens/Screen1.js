import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import { useContext, useState } from 'react';
import Context from './Context';

export default function Screen1({ navigation }) {
  const [text, setText] = useState('');
  const { name, setName } = useContext(Context);

  const onSubmit = () => {
    setName(text);
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
        <Text style={styles.buttonText}>Buscar</Text>
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
