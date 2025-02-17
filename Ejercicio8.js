import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Ejercicio8() {
  const [square, setSquare] = useState({
    color: 'green',
    width: 150,
    height: 150,
  });

  function handleOnPress() {
    if (square.color === 'yellow' && square.height < 390) {
      setSquare({
        color: 'green',
        width: square.width + 10,
        height: square.height + 10,
      });
    } else if (square.color === 'yellow' && square.height >= 390) {
      setSquare({ color: 'green', width: 150, height: 150 });
    } else if (square.color === 'green' && square.height < 390) {
      setSquare({
        color: 'yellow',
        width: square.width + 20,
        height: square.height + 20,
      });
    } else if (square.color === 'green' && square.height >= 390) {
      setSquare({ color: 'green', width: 150, height: 150 });
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.square,
          {
            width: square.width,
            height: square.height,
            backgroundColor: square.color,
          },
        ]}
      />
      <Pressable onPress={handleOnPress}>
        <Text style={styles.text}>Púlsame!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    marginTop: -6,
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
  },
  text: {
    height: 40,
    width: 80,
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 6,
  },
});
