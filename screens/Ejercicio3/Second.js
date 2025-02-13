import { View, StyleSheet, Image, ScrollView } from 'react-native';

import { useContext } from 'react';

import Context from '../Context';

export default function Second() {

  const {photoSet, setPhotoSet} = useContext(Context);

  return (
      <View style={styles.container}>
      <ScrollView>
          { 
            photoSet.map((element, index) => (
            
                <View key={index}>
                  <Image height="500" width="500" source={{uri: element}}/>
                </View>
            ))
          }
      </ScrollView>
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
