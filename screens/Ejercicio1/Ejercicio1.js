import { View, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';

export default function Ejercicio1() {

    const [currentSound, setCurrentSound] = useState();

    async function playMusic() {
      
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audio/furret_walk.mp3')
      );

      setCurrentSound(sound);
    
      await sound.playAsync();
    }

    async function pauseMusic(){

        try {

            const currentSoundStatus = await currentSound.getStatusAsync();

            if (currentSoundStatus.isLoaded) {
                
                if (currentSoundStatus.isPlaying) {
                    
                    currentSound.pauseAsync();
                }
            }
            
        } catch (error) {
            
            console.error(error);
        }
    }

    async function resumeMusic() {

        try {
        
            const currentSoundStatus = await currentSound.getStatusAsync();

            if (currentSoundStatus.isLoaded) {
                    
                if (!currentSoundStatus.isPlaying) {
                    
                    await currentSound.playAsync();
                }
            }

        } catch (error) {
                
            console.error(error);
        }
    }

    async function stopMusic() {

        try {
        
            const currentSoundStatus = await currentSound.getStatusAsync();

            if (currentSoundStatus.isLoaded) {
                    
                if (currentSoundStatus.isPlaying) {
                    
                    await currentSound.stopAsync();
                }
            }

        } catch (error) {
                
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <Button color='#008000' onPress={playMusic} title='Play'/>
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
