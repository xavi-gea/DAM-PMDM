import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = useState();
  const [path, setPath] = useState([
    require('./src/drumkit/chh1.wav'),
    require('./src/drumkit/chh2.wav'),
    require('./src/drumkit/chh3.wav'),
    require('./src/drumkit/chh4.wav'),
    require('./src/drumkit/dr_tb_1.wav'),
    require('./src/drumkit/dr_tb_2.wav'),
    require('./src/drumkit/dr_tb_3.wav'),
    require('./src/drumkit/dr_tb_4.wav'),
    require('./src/drumkit/kk1.wav'),
    require('./src/drumkit/kk2.wav'),
    require('./src/drumkit/kk3.wav'),
    require('./src/drumkit/lo-fi-cow.wav'),
    require('./src/drumkit/sn1.wav'),
    require('./src/drumkit/sn2.wav'),
    require('./src/drumkit/sn3.wav'),
    require('./src/drumkit/sn4.wav'),
  ]);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playLocalSound = async (event, position) => {
    event.preventDefault();

    const { sound } = await Audio.Sound.createAsync(path[position]);
    setSound(sound);
    await sound.playAsync();
  };

  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Beat Box</Text>

      <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 0)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 1)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 2)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 3)} style={styles.button}></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 4)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 5)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 6)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 7)} style={styles.button}></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 8)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 9)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 10)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 11)} style={styles.button}></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 12)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 13)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 14)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={(event) => playLocalSound(event, 15)} style={styles.button}></Pressable>
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
    marginVertical: 80 
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
});
