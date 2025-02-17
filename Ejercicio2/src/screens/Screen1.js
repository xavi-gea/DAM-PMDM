import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useContext } from 'react';
import Context from './Context';

export default function Pantalla1({ navigation }) {
  const { uri, setUri } = useContext(Context);

  const onSubmit = () => {
    setUri(require('../audio/1.mp3'));
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 2 }}>
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
