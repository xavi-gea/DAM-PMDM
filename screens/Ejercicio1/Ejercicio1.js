import { Button } from 'react-native';
import { Audio } from 'expo-av';

export default function Ejercicio1() {

    async function playMusic() {
      
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audio/furret_walk.mp3')
      );
    
      await sound.playAsync();
    }

    return (
        <Button onPress={playMusic} title='Pulsa para iniciar canción'></Button>
    );
}