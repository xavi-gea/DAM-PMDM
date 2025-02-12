import { useContext, useEffect } from 'react';
import Context from '../Context';
import { Pressable, Text, View, StyleSheet, Button } from 'react-native';

export default function Second4(props) {

    const {sound, setSound} = useContext(Context);

    useEffect(() => {

        async function playMusic() {       
    
            await sound.playAsync();
        }

        playMusic();

    }, []);

    // useEffect(() => {
    //   return sound
    //     ? () => {
    //         sound.unloadAsync();
    //       }
    //     : undefined;
    // }, [sound]);

    async function pauseMusic(){

        try {

            const soundStatus = await sound.getStatusAsync();

            if (soundStatus.isLoaded) {
                
                if (soundStatus.isPlaying) {
                    
                    sound.pauseAsync();
                }
            }
            
        } catch (error) {
            
            console.error(error);
        }
    }

    async function resumeMusic() {

        try {
        
            const soundStatus = await sound.getStatusAsync();

            if (soundStatus.isLoaded) {
                    
                if (!soundStatus.isPlaying) {
                    
                    await sound.playAsync();
                }
            }

        } catch (error) {
                
            console.error(error);
        }
    }

    async function stopMusic() {

        try {
        
            const soundStatus = await sound.getStatusAsync();

            if (soundStatus.isLoaded) {
                    
                if (soundStatus.isPlaying) {
                    
                    await sound.stopAsync();
                }
            }

        } catch (error) {
                
            console.error(error);
        }
    }
    
    return (
        <View style={styles.container}>
            <Button color='#E28743' onPress={pauseMusic} title='Pause'/>
            <Button onPress={resumeMusic} title='Resume'/>
            <Button color='#FF0000' onPress={stopMusic} title='Stop'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  });
  