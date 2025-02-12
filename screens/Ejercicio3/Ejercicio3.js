import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function Ejercicio3() {
  
  async function playLocalSound(soundNumber){

    let storedSound;

    switch (soundNumber) {
      case 0: storedSound = require("../../assets/audio/drumkit/chh1.wav"); break;
      case 1: storedSound = require("../../assets/audio/drumkit/chh2.wav"); break;
      case 2:  storedSound = require("../../assets/audio/drumkit/chh3.wav"); break;
      case 3:  storedSound = require("../../assets/audio/drumkit/chh4.wav"); break;
      case 4: storedSound = require("../../assets/audio/drumkit/dr_tb_1.wav"); break;
      case 5: storedSound = require("../../assets/audio/drumkit/dr_tb_2.wav"); break;
      case 6: storedSound = require("../../assets/audio/drumkit/dr_tb_3.wav"); break;
      case 7: storedSound = require("../../assets/audio/drumkit/dr_tb_4.wav"); break;
      case 8: storedSound = require("../../assets/audio/drumkit/kk1.wav"); break;
      case 9:  storedSound = require("../../assets/audio/drumkit/kk2.wav"); break;
      case 10: storedSound = require("../../assets/audio/drumkit/kk3.wav"); break;
      case 11: storedSound = require("../../assets/audio/drumkit/lo-fi-cow.wav"); break;
      case 12: storedSound = require("../../assets/audio/drumkit/sn1.wav"); break;
      case 13: storedSound = require("../../assets/audio/drumkit/sn2.wav"); break;
      case 14: storedSound = require("../../assets/audio/drumkit/sn3.wav"); break;
      case 15: storedSound = require("../../assets/audio/drumkit/sn4.wav"); break;
    }

    const { sound } = await Audio.Sound.createAsync(
      storedSound
    );
  
    await sound.playAsync();
  }

  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Beat Box</Text>

      <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(0)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(1)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(2)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(3)} style={styles.button}></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(4)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(5)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(6)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(7)} style={styles.button}></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(8)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(9)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(10)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(11)} style={styles.button}></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(12)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(13)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(14)} style={styles.button}></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => playLocalSound(15)} style={styles.button}></Pressable>
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
