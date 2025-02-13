import { View, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';

export default function Ejercicio1() {
  
  const [isRecording, setIsRecording] = useState(false);
  
  const [recording, setRecording] = useState(null);
  
  const [recordURI, setRecordURI] = useState(null);
  
  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);
  
  async function startRecording() {
      
    try {

      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
      });
  
      const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
  
      setRecording(recording);
      setIsRecording(true);
    
    } catch (error) {

      console.error(error);
    }
  }
  
  async function stopRecording() {
      
    await recording.stopAndUnloadAsync();

    setRecordURI(recording.getURI());

    setIsRecording(false);
  }
  
  async function playRecording() {
      
    const { sound } = await Audio.Sound.createAsync(
      {uri: recordURI}
    );

    await sound.playAsync();
  }
  
  return (
    <View style={styles.container}>
  
      {isRecording ? (
        <Button color="#FF0000" onPress={stopRecording} title="Stop Recording" />
      ) : (
        <Button color="#008000" onPress={startRecording} title="Start Recording" />
      )}
  
      <Button onPress={playRecording} title="Play Recording" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  }
});
