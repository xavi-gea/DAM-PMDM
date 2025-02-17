import { useState, useRef, useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Context from './Context';


export default function Screen1({ navigation }) {
  const [permission, setPermission] = useCameraPermissions();
  const [type, setType] = useState('back');
  const [video, setVideo] = useState();
  const [videos, setVideos] = useState([]);
  const [shooting, setShooting] = useState(false);
  const [cam, setCam] = useState(true);
  const [status, setStatus] = useState({});
  const {uris, setUris} = useContext(Context);


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
        let newArr = [...uris];
        newArr.push(data.uri);
        setUris(newArr);
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
            onPress={() => [setShooting(!shooting), setCam(!cam)]}
            style={styles.buttonText}>
            <Text style={{ fontSize: 25, color: 'white' }}>
              Start Recording
            </Text>
          </Pressable>
          <Pressable
            style={styles.buttonText}
            onPress={() => navigation.navigate('Screen2')}>
            <Text style={{ fontSize: 25, color: 'white' }}> Go to Gallery </Text>
          </Pressable>
          }
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
  text: {
    fontSize: 18,
  },
  buttonText: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    width: 260,
    height: 60,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
  },
});