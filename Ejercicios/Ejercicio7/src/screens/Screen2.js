import { useContext, useState, useRef } from 'react';
import Context from './Context';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';


export default function Screen2() {
  const { uris, setUris } = useContext(Context);
  const [status, setStatus] = useState({});

  const camera = useRef(null);


  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {uris.map((value) => (
        <Video
            ref={camera}
            style={styles.video}
            source={{
              uri: value,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
    video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  }
});