import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function Ejercicio1() {
  const [record, setRecord] = useState(false);
  const [recording, setRecording] = useState();
  const [uri, setUri] = useState();

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      setRecord(!record);
    } catch (err) {
      console.error('Error al iniciar la grabación', err);
    }
  };

  const stopRecording = async () => {
    await recording.stopAndUnloadAsync();
    setUri(recording.getURI());
    setRecord(!record);
  };

  const play = async () => {
    try {
      const playbackObject = new Audio.Sound();
      await playbackObject.loadAsync(
        { uri: uri },
        { shouldPlay: true }
      );
    } catch (error) {
      console.log('Error en el metodo play', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 3 }}>
        <Pressable onPress={record ? stopRecording : startRecording} style={styles.button}>
        <Text style={{ fontSize: 25, color: 'white' }}>{record ? 'Stop Recording' : 'Start Recording'}</Text></Pressable>
      </View>
      <View style={{ padding: 3 }}>
        <Pressable onPress={() => play()} style={styles.button}>
        <Text style={{ fontSize: 25, color: 'white' }}>Play Recording</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    width: 260,
    height: 80,
    backgroundColor: 'blue',
  },
});