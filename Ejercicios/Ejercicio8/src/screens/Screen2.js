import { useContext, useState, useRef } from 'react';
import Context from './Context';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function Screen2() {
  const { uris, setUris } = useContext(Context);
  const [status, setStatus] = useState({});
  const [current, setCurrent] = useState(0);

  const camera = useRef(null);

  const handlePrevious = async () => {
    if (current === 0) {
      setCurrent(uris.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const handleNext = async () => {
    if (current === uris.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Video
        ref={camera}
        style={styles.video}
        source={{
          uri: uris[current],
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Pressable onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
});
