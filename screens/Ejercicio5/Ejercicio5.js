import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Audio, Video } from 'expo-av';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Ejercicio5() {

  const [permission, setPermission] = useCameraPermissions();
  const [type, setType] = useState('back');
  const [video, setVideo] = useState();
  const [shooting, setShooting] = useState(false);
  const [status, setStatus] = useState({});

  const camera = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {

    return(
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

  async function takeVideo() {
    
    if (camera.current) {
      
      try {
        
        await Audio.requestPermissionsAsync();

        const data = await camera.current.recordAsync();
        setVideo(data.uri);
        
      } catch (error) {

        console.error('Error recording video:', error);
      }
    }
  }

  async function stopVideo() {

    camera.current.stopRecording();
    setShooting(!shooting);
  }

  if (shooting) {
    
    return(
      <View style={styles.container}>
        <CameraView
          style={styles.camera} 
          ref={camera} 
          facing={type} 
          mode="video"
        >
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button} 
              onPress={() => {setType(type === 'back' ? 'front' : 'back')}}
            >
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
      </View>
    );

  }else{

    return(
      <View style={styles.container}>
        <View
          style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          padding: 10,
        }}>
          <Button onPress={() => setShooting(!shooting)} title="Start Shooting" />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  video: {
    width: 200,
    height: 200
  },
  camera: { flex: 1 },
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
    color: 'white',
  },
  buttonText: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'blue',
  },
});