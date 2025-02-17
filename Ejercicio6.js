import { useState } from 'react';
import { Text, Pressable, TextInput, View, StyleSheet } from 'react-native';

export default function Ejercicio3() {
  const [text, setText] = useState('');
  const [dollars, setDollars] = useState();

  function handleOnPress() {
    if (isNaN(text)) {
      alert('Has introducido texto');
      setDollars('');
    } else if (text === '') {
      alert('No has introducido nada');
      setDollars('');
    } else if (!isNaN(text)) {
      let result = text * 0.98;
      setDollars(result.toFixed(2) + ' dólares');
    }
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Conversor euros - dólares</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta euros"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{dollars}</Text>
      <Pressable onPress={handleOnPress}>
        <Text style={styles.text}>Pulsa...</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 40,
    width: 80,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    padding: 6,
  },
});
