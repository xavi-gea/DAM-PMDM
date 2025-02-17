import { useContext, useState } from 'react';
import Context from './Context';
import { View, Image, Pressable, Text, StyleSheet } from 'react-native';

export default function Screen2() {
  const { uris, setUris } = useContext(Context);
  const [current, setCurrent] = useState(0);

  const handlePrevious = async () => {
    if (current === 0) {
      setCurrent(uris.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const handleNext = async () => {
    if (current === uris.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{
          width: 370,
          height: 450,
        }}
        source={{
          uri: uris[current],
        }}
      />

      <View style={styles.buttons}>
        <Pressable onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
});
