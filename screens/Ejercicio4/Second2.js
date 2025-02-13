import { View, StyleSheet, Image, Button } from 'react-native';

import { useContext, useEffect, useState } from 'react';

import Context from '../Context';

export default function Second2() {

  const {photoSet, setPhotoSet} = useContext(Context);

  const [currentURIIndex, setCurrentURIIndex] = useState(0);

  const [imageURI, setImageURI] = useState(null);

  useEffect(() => {

    setImageURI(photoSet[0]);

  },[]);

  function changeToNextImage(toNextURI) {

    let newCurrentURIIndex = currentURIIndex;

    if (toNextURI) {
      
      if (newCurrentURIIndex + 1 < photoSet.length) {
        
        newCurrentURIIndex++;
      }

    }else{

      if (newCurrentURIIndex - 1 >= 0) {
        
        newCurrentURIIndex--;
      }
    }

    setCurrentURIIndex(newCurrentURIIndex);

    const newImageURI = photoSet[newCurrentURIIndex];
    
    setImageURI(newImageURI);
  }

  return (
      <View style={styles.container}>
        <Image height="500" width="500" source={{uri: imageURI}}/>
        <Button onPress={() => changeToNextImage(false)} title="Anterior" />
        <Button onPress={() => changeToNextImage(true)} title="Siguiente" />
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
