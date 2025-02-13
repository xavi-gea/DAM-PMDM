import { View, Button, StyleSheet, Text, TextInput, Pressable, Image, ScrollView } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useContext, useEffect, useRef, useState } from 'react';

import Context from '../Context';

import { MaterialIcons } from '@expo/vector-icons';

export default function First2(props) {

  const [permision, setPermision] = useCameraPermissions();
  const [cameraType, setCameraType] = useState('back');

  const [startShooting, setStartShooting] = useState(false);

  const {photoSet, setPhotoSet} = useContext(Context);

  const camera = useRef(null);

  if (!permision) {
    return <></>;
  }    

  if (!permision.granted) {
    
    return(
      <View style={styles.container}>
        <Button onPress={setPermision} title='Pedir permiso para la cámara'></Button>
      </View>
    );
  }

  async function takePicture() {
      
    const options = { quality: 0.5, base64: true };
    const img = await camera.current.takePictureAsync(options);

    let newPhotoSet = [...photoSet];

    newPhotoSet.push(img.uri);    

    setPhotoSet(newPhotoSet);

    setStartShooting(false);
  }

  if (startShooting) {
    
    return(
      <View style={styles.container}>
        <CameraView style={styles.camera} ref={camera} facing={cameraType}>
          <View style={styles.buttonContainer}>
            <Pressable 
              style={styles.button} 
              onPress={() => {setCameraType(cameraType === 'back' ? 'front' : 'back')}}
            >
              <Text style={styles.text}>Cambiar cámara</Text>

              <MaterialIcons 
                onPress={takePicture} 
                name='play-circle-outline' 
                size={75} 
                color="black"
              />
            </Pressable>
          </View>
        </CameraView>
      </View>
    );

  }else{

    return (
      <View style={styles.container}>
        <Button onPress={() => setStartShooting(true)} title="Start Shooting" />
        <Button onPress={() => props.navigation.navigate('Second2')} title="Gallery" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  camera: { flex: 1 },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  buttonText: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    width: 80,
    height: 80,
    backgroundColor: "blue",
  }
});
