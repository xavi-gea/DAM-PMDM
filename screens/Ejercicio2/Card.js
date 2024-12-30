import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Card({ route }){
  
  const [currentImgCount, setCurrentImgCount] = useState(0);

  const navigation = useNavigation();
  
  const {name, imgList} = route.params;

  const changeImage = (pageType) => {

    let currentCount = currentImgCount;

    if (pageType == "next") {

      (currentCount + 1) < imgList.length ? currentCount++ : currentCount = 0;

    }else{

      (currentCount - 1) >= 0 ? currentCount-- : currentCount = (imgList.length - 1);
    }

    setCurrentImgCount(currentCount);
  }

  return (
    <View style={STYLES.container}>
      <View>
        <View style={{ width: '50%', alignItems: 'center' }}>
          <Text style={STYLES.text} onPress={() => navigation.goBack()}>
            {name}
          </Text>
          <Image
            style={{
              width: 120,
              height: 120,
            }}
            source={{
              uri: imgList[currentImgCount],
            }}
          />
        </View>
      </View>
      <View style={STYLES.buttons}>
        <Pressable onPress={() => changeImage("prev")} style={STYLES.button}>
          <Text style={STYLES.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable onPress={() => changeImage("next")} style={STYLES.button}>
          <Text style={STYLES.buttonText}>Siguiente</Text>
        </Pressable>
      </View>
    </View>
  );
}

const STYLES = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
  }
});