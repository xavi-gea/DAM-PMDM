import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function Ejercicio3() {
  const [record, setRecord] = useState(false);
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [recording, setRecording] = useState();
  const [uri, setUri] = useState();
  const [uris, setUris] = useState([]);

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
      await playbackObject.loadAsync({ uri: uri }, { shouldPlay: true });
    } catch (error) {
      console.log('Error en el metodo play', error.message);
    }
  };

  const saveRecording = async () => {
    let newArray = [...uris, { path: uri, name: text }];
    setUris(newArray);
    setText('');
  };

  const searchRecording = async () => {
    try {
      let newArray = [...uris];
      newArray = newArray.filter((item) => item.name === searchTerm);
      if (newArray.length === 1) {
        const playbackObject = new Audio.Sound();
        await playbackObject.loadAsync(
          { uri: newArray[0].path },
          { shouldPlay: true }
        );
      } else {
        alert('No se ha encontrado ninguna grabación');
      }
      setSearchTerm('');
    } catch (error) {
      console.log('Error en el metodo playSearchRecording', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <View style={{ padding: 3 }}>
          <Pressable
            onPress={record ? stopRecording : startRecording}
            style={styles.button}>
            <Text style={{ fontSize: 25, color: 'white' }}>
              {record ? 'Stop Recording' : 'Start Recording'}
            </Text>
          </Pressable>
        </View>
        <View style={{ padding: 3 }}>
          <Pressable onPress={() => play()} style={styles.button}>
            <Text style={{ fontSize: 25, color: 'white' }}>Play Recording</Text>
          </Pressable>
        </View>
      </View>

      <Text style={{ fontSize: 25 }}>Nombre grabación: {text}</Text>
      <View style={{ padding: 2, marginBottom: 15 }}>
        <TextInput
          onChangeText={(text) => setText(text)}
          style={{
            width: 385,
            color: 'white',
            fontSize: 30,
            backgroundColor: 'blue',
            textAlign: 'center',
            height: 55,
          }}
          value={text}
        />
      </View>
      <View style={{ padding: 3, marginBottom: 15 }}>
        <Pressable onPress={() => saveRecording()} style={styles.button}>
          <Text style={{ fontSize: 25, color: 'white' }}>Save Recording</Text>
        </Pressable>
      </View>

      <Text style={{ fontSize: 25 }}>Término de búsqueda: {searchTerm}</Text>
      <View style={{ padding: 2, marginBottom: 15 }}>
        <TextInput
          onChangeText={(text) => setSearchTerm(text)}
          style={{
            width: 385,
            color: 'white',
            fontSize: 30,
            backgroundColor: 'blue',
            textAlign: 'center',
            height: 55,
          }}
          value={searchTerm}
        />
      </View>
      <View style={{ padding: 3, marginBottom: 15 }}>
        <Pressable onPress={() => searchRecording()} style={styles.button}>
          <Text style={{ fontSize: 25, color: 'white' }}>Search Recording</Text>
        </Pressable>
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
    height: 60,
    backgroundColor: 'blue',
  },
});
