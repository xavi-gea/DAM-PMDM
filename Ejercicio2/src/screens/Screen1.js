import { StyleSheet, Text, Pressable, View } from 'react-native';
import { useContext } from 'react';
import Context from '../Context';

export default function Screen1({ navigation }) {
  const { uri, setUri } = useContext(Context);

  const onSubmit = () => {
    setUri(require('../../audio/1.mp3'));
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 2 }}>
            <Pressable onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Play</Text>
            </Pressable>
          </View>
      </View>
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
    width: '100%',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
