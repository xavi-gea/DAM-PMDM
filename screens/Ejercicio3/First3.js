import { Button, Pressable, View, Text, TextInput, StyleSheet} from 'react-native';
import { Audio } from 'expo-av';
import { useContext, useEffect, useState } from 'react';
import Context from '../Context';

export default function First3(props){

    const {sound, setSound} = useContext(Context);
    const [musicText, setMusicText] = useState();

    async function getMusic() {

        const formattedMusicText = musicText.toUpperCase();

        let storedSound = require('../../assets/audio/roblox-death-sound.mp3');

        if (formattedMusicText.includes("FURRET") || formattedMusicText.includes("WALK")) {
            
            storedSound = require('../../assets/audio/furret_walk.mp3');

        }else if(formattedMusicText.includes("DARK") || formattedMusicText.includes("SOULS")){

            storedSound = require('../../assets/audio/dark_souls.mp3');
        }        

        const { sound } = await Audio.Sound.createAsync(
            storedSound
        );

        setSound(sound);

        props.navigation.navigate('Second3');
    }
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setMusicText} value={musicText} placeholder='Nombre de canción'/>
            <Button onPress={getMusic} title='Pulsa para iniciar canción'/>
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
    },
    input: {
        borderWidth: 3
    }
});