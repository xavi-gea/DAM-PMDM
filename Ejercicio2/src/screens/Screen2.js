import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from '../Context';
import { Audio } from 'expo-av';

export default function Screen2() {
  const { uri, setUri } = useContext(Context);
  const [sound, setSound] = useState();

  useEffect(() => {
    play();
  }, []);

  const play = async () => {
    const { sound } = await Audio.Sound.createAsync(uri);
    setSound(sound);
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text>"Playing..."</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
