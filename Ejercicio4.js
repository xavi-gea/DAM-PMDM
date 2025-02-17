import { useState } from 'react';
import { Text, Pressable, TextInput, View, StyleSheet } from 'react-native';

export default function Ejercicio4() {
  const [text, setText] = useState('');
  const [position, setPosition] = useState(0);
  const [myArrayStrings, setMyArrayStrings] = useState([]);
  const [show, setShow] = useState();

  const handleOnPress = () => {
    if (isNaN(text)) {
      alert('Tú texto se ha introducido correctamente.');
      let newArray = [...myArrayStrings];
      newArray.push(text);
      setMyArrayStrings(newArray);
      setText('');
    } else if (text === '') {
      alert('No has introducido nada.');
    } else if (!isNaN(text)) {
      alert('Has introducido un número. Por favor, introduce texto.');
      setText('');
    }
  };

  const showPosition = () => {
    if (
      parseInt(position) > myArrayStrings.length - 1 ||
      parseInt(position) < 0
    ) {
      alert('Introduce una posición correcta.');
    } else {
      setPosition(parseInt(position));
      setShow(myArrayStrings[position]);
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
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta posición array..."
        onChangeText={(newText) => setPosition(newText)}
        defaultValue={0}
      />
      <Pressable onPress={showPosition}>
         <Text style={styles.text}>Pulsa...</Text>
      </Pressable>
      <Text style={{ padding: 10, fontSize: 42 }}>{show}</Text>
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
