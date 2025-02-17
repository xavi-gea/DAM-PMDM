import { Pressable, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [square, setSquare] = useState({
    color: 'green',
    width: 150,
    height: 150,
  });

  function handleOnPress(num) {
    if (num === 0) {
      setSquare({
        color: 'green',
        width: square.width + 10,
        height: square.height + 10,
      });
    } else {
      setSquare({
        color: 'yellow',
        width: square.width - 20,
        height: square.height - 20,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => handleOnPress(0)}
        style={[
          styles.square,
          {
            width: square.width,
            height: square.height,
            backgroundColor: square.color,
          },
        ]}
      />
      <Pressable
        onPress={() => handleOnPress(1)}
        style={[
          styles.square,
          {
            width: square.width,
            height: square.height,
            backgroundColor: square.color,
          },
        ]}
      />
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
});
