import { useContext, useEffect } from 'react';
import Context from './Context';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function Second(props) {

    const {sound, setSound} = useContext(Context);

    useEffect(() => {

        async function playMusic() {       
    
            await sound.playAsync();
        }

        playMusic();

    }, []);

    useEffect(() => {
      return sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);
    
    return (
        <View style={styles.container}>
            <Pressable onPress={()=> props.navigation.navigate('First')}>
                <Text>Pulsa para volver</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});