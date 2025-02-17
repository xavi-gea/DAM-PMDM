import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Video } from 'expo-av';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Ejercicio5() {
  const [permission, setPermission] = useCameraPermissions();
  const [type, setType] = useState('back');
  const [video, setVideo] = useState();
  const [shooting, setShooting] = useState(false);
  const [cam, setCam] = useState(true);
  const [status, setStatus] = useState({});

  const camera = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Pressable onPress={setPermission} style={styles.buttonText}>
          <Text style={{ fontSize: 25, color: 'white' }}>grant permission</Text>
        </Pressable>
      </View>
    );
  }

  const takeVideo = async () => {
    if (camera.current) {
      try {
        const data = await camera.current.recordAsync();
        setVideo(data.uri);
      } catch (error) {
        console.error('Error recording video:', error);
      }
    }
  };

  const stopVideo = async () => {
    camera.current.stopRecording();
    setCam(!cam);
    setShooting(!shooting);
  };

  return (
    <View style={styles.container}>
      {cam && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Pressable
            style={styles.text}
            onPress={() => [setShooting(!shooting), setCam(!cam)]}>
            <Text style={styles.buttonText}> Start recording </Text>
          </Pressable>

          <Video
            ref={camera}
            style={styles.video}
            source={{
              uri: video,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      )}
      {shooting && (
        <CameraView
          style={styles.camera}
          ref={camera}
          facing={type}
          mode="video">
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setType(type === 'back' ? 'front' : 'back');
              }}>
              <Text style={styles.text}> Flip </Text>
              <MaterialIcons
                onPress={() => takeVideo()}
                name="play-circle-outline"
                size={75}
                color="black"
              />
              <Entypo
                onPress={() => stopVideo()}
                name="controller-stop"
                size={90}
                color="black"
              />
            </Pressable>
          </View>
        </CameraView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
text: {
    fontSize: 18,
  },
  buttonText: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    width: 160,
    height: 60,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
  },
});
