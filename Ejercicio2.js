import { useState } from 'react';
import { Text, Pressable, TextInput, View, StyleSheet } from 'react-native';

export default function Ejercicio2() {
  const [text, setText] = useState('');
  const [myArray, setMyArray] = useState([]);

  const handleOnPress = () => {
    if (isNaN(text)) {
      setText('');
      alert('Has introducido texto. Introduce un número.');
      setText('');
    } else if (text === '') {
      alert('No has introducido nada.');
    } else if (!isNaN(text)) {
      alert('Tú número se ha guardado.');
      let newArray = [...myArray];
      newArray.push(text);
      setMyArray(newArray);
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
      {myArray.map((value) => (
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
