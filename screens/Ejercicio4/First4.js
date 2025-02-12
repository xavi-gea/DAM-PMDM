import { Button, Pressable, View, Text, TextInput, StyleSheet} from 'react-native';
import { Audio } from 'expo-av';
import { useContext, useEffect, useState } from 'react';

import { SelectList } from 'react-native-dropdown-select-list';

import Context from '../Context';

export default function First4(props){

    const {sound, setSound} = useContext(Context);
    const [musicSelect, setMusicSelect] = useState();

    const selectData = [
      { key: "1", value: "Furret" },
      { key: "2", value: "Dark souls" },
      { key: "3", value: "Roblox" }
    ];

    async function getMusic() {
        
        let storedSound = require('../../assets/audio/roblox-death-sound.mp3');

        switch (musicSelect) {

            case "1": storedSound = require('../../assets/audio/furret_walk.mp3'); break;
            case "2": storedSound = require('../../assets/audio/dark_souls.mp3'); break;
            case "3": storedSound = require('../../assets/audio/roblox-death-sound.mp3'); break;
            default: storedSound = require('../../assets/audio/roblox-death-sound.mp3'); break;
        }      

        const { sound } = await Audio.Sound.createAsync(
            storedSound
        );

        setSound(sound);

        props.navigation.navigate('Second4');
    }
    
    return (
        <View style={styles.container}>
            <SelectList 
                setSelected={(val) => setMusicSelect(val)} 
                data={selectData} 
                save='key'
            />
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