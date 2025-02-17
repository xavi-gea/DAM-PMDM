import { useState } from 'react';
import { Text, Pressable, TextInput, View, StyleSheet } from 'react-native';

export default function Ejercicio3() {
  const [text, setText] = useState('');
  const [myArrayNumbers, setMyArrayNumbers] = useState([]);
  const [myArrayStrings, setMyArrayStrings] = useState([]);

  const handleOnPress = () => {
    if (isNaN(text)) {
      alert('Has introducido texto.');
      let newArray = [...myArrayStrings];
      newArray.push(text);
      setMyArrayStrings(newArray);
      setText('');
    } else if (text === '') {
      alert('No has introducido nada.');
    } else if (!isNaN(text)) {
      alert('Tú número se ha guardado.');
      let newArray = [...myArrayNumbers];
      newArray.push(text);
      setMyArrayNumbers(newArray);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta tu texto..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>{text}</Text>
      <Pressable onPress={handleOnPress}>
         <Text style={styles.text}>Pulsa...</Text>
      </Pressable>
      {myArrayStrings.map((value) => (
        <Text>{value}</Text>
      ))}
      {myArrayNumbers.map((value) => (
        <Text>{value}</Text>
      ))}
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
  }
});
