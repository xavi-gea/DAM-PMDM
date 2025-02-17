import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from './Context';
import { Audio } from 'expo-av';

export default function Screen2() {
  const { song, setSong } = useContext(Context);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const play = async () => {
    const { sound } = await Audio.Sound.createAsync(song);
    setSound(sound);
    await sound.playAsync();
  };

  const resume = async () => {
    try {
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pause = async () => {
    try {
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.pauseAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stop = async () => {
    await sound.stopAsync();
  };
  
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Play Song</Text>

      <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={play} style={styles.button}>
              <Text style={styles.buttonText}>Play</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={pause} style={styles.button}>
              <Text style={styles.buttonText}>Pause</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={resume} style={styles.button}>
              <Text style={styles.buttonText}>Resume</Text>
            </Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={stop} style={styles.button}>
              <Text style={styles.buttonText}>Stop</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 80,
  },
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
  },
});
