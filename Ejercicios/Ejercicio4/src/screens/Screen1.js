import { useState, useContext, useRef } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Context from './Context';
import { MaterialIcons } from '@expo/vector-icons';

export default function Screen1({ navigation }) {
  const [permission, setPermission] = useCameraPermissions();
  const [type, setType] = useState('back');
  const [photo, setPhoto] = useState();
  const [shooting, setShooting] = useState(false);
  const [cam, setCam] = useState(true);
  const { uris, setUris } = useContext(Context);

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

  const takePicture = async () => {
    const options = { quality: 0.5, base64: true };
    const img = await camera.current.takePictureAsync(options);
    setPhoto(img.uri);

    let newArr = [...uris];
    newArr.push(img.uri);

    setUris(newArr);
    setShooting(!shooting);
    setCam(!cam);
  };

  const onSubmit = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View style={styles.container}>
      {cam && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            style={styles.text}
            onPress={() => [setShooting(!shooting), setCam(!cam)]}>
            <Text style={styles.buttonText}> Start Shooting </Text>
          </Pressable>
          <Pressable style={styles.text} onPress={() => onSubmit()}>
            <Text style={styles.buttonText}> Go to Gallery </Text>
          </Pressable>
        </View>
      )}
      {shooting && (
        <CameraView style={styles.camera} ref={camera} facing={type}>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setType(type === 'back' ? 'front' : 'back');
              }}>
              <Text style={styles.text}> Flip </Text>
              <MaterialIcons
                onPress={() => takePicture()}
                name="play-circle-outline"
                size={75}
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
