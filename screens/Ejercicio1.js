import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function Ejercicio1() {

    const [rickData, setRickData] = useState();
  
    useEffect(() => {


  
    }, [rickData]);
  
    const callRickAPI = async () => {

      // todo: call with multiple characters with id randomized beforehand
  
      const response = await fetch("https://rickandmortyapi.com/api/character/1")
        .then(setRickData(await response.json()))
        .catch(console.log(error));
    }

    const handleOnPress = () => {

      setTimeout(1000);
      callRickAPI();
    };
  
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 80,
      }}>
      <Text style={{ fontSize: 45, fontWeight: 'bold' }} onPress={handleOnPress}>Memory</Text>

      <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 3 }}>
            <Pressable
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                width: 80,
                height: 80,
                backgroundColor: 'blue',
              }}>
              <Image
                style={styles.tinyPhoto}
                source={{
                  uri: '',
                }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyPhoto: {
    width: 80,
    height: 80,
  },
});