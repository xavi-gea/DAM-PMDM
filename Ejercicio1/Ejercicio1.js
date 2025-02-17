import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const play = async () => {
    const { sound } = await Audio.Sound.createAsync(require(`./src/audio/1.mp3`));
    await sound.playAsync();
  };

  return (
    <View style={styles.header}>
      <View style={{ marginTop: 250 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={play} style={styles.button}>
            <Text style={{ fontSize: 25, color: 'white' }}>Play</Text></Pressable>
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