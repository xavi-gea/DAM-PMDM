import { Button, Pressable, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import { useContext, useEffect, useState } from 'react';
import Context from './Context';

export default function First(props){

    const {sound, setSound} = useContext(Context);

    useEffect(() => {

        async function getMusic() {
    
            const { sound } = await Audio.Sound.createAsync(
                require('../../assets/audio/furret_walk.mp3')
            );
    
            setSound(sound);
        }

        getMusic();

    }, []);
    
    return (

        <Button onPress={()=> props.navigation.navigate('Second')} title='Pulsa para iniciar canción'></Button>
    );
}