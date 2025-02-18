import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Audio } from 'expo-av';

import axios from 'axios';

import { useContext, useState } from "react";
import Context from "../../services/Context";
import { CallAPI } from '../../services/services';

export default function AudioRecorder() {

  const {songSearchText, setSongSearchText} = useContext(Context);

  const [apiData, setApiData] = useState();

  const [currentSongPosition, setCurrentSongPosition] = useState(0);

  const [albumName, setAlbumName] = useState('');
  const [songName, setSongName] = useState('');
  const [song, setSong] = useState(null);
  const [hasSong, setHasSong] = useState(false);

  useEffect(()=> {

    async function getAPIData() {
      
      const apiData = await CallAPI('https://api.deezer.com/search?q=' + songSearchText);

      //const apiData = await axios.get('https://api.deezer.com/search?q=' + songSearchText).then( res => res.data);

      setApiData(apiData.data);

      if (apiData.data.length > 0) {

        updateSongData(apiData);
      }
    }

    getAPIData();
    
  }, []);

  async function updateSongData(songData){

    setAlbumName(songData.data[currentSongPosition].album.title);

    setSongName(songData.data[currentSongPosition].title);

    const { sound } = await Audio.Sound.createAsync(
      {uri: songData.data[currentSongPosition].preview}
    );   
    
    setSong(sound);

    setHasSong(true);
  }

  async function playSong() {

    if (hasSong) {
      
      await song.playAsync();
    }
    
  }

  async function pauseSong(){

    try {

      const songStatus = await song.getStatusAsync();

      if (songStatus.isLoaded) {
          
          if (songStatus.isPlaying) {
              
            song.pauseAsync();
          }
      }
      
    } catch (error) {
        
        console.error(error);
    }
  }

  async function stopSong(){

    try {

      const songStatus = await song.getStatusAsync();

      if (songStatus.isLoaded) {
          
          if (songStatus.isPlaying) {
              
            song.stopAsync();
          }
      }
      
    } catch (error) {
        
        console.error(error);
    }
  }



  return (
      <View style={styles.container}>
        <Text style={styles.text}>Album: {albumName}</Text>
        <Text style={styles.text}>Canción: {songName}</Text>
        <View style={styles.audioButtons}>
          <View style={styles.carousel}>
            <AntDesign name="stepbackward" size={75} color="black" />
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={() => playSong()}>
              <MaterialIcons name="play-circle-outline" size={90} color="black" />
            </Pressable>
            <Pressable onPress={() => pauseSong()}>
              <Ionicons name="pause-circle" size={90} color="black" />
            </Pressable>
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={() => stopSong()}>
              <Entypo name="controller-stop" size={90} color="black" />
            </Pressable>
          </View>
          <View style={styles.carousel}>
            <AntDesign name="stepforward" size={75} color="black" />
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
  audioButtons: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  carousel: {
    padding: 2,
    marginTop: 35,
  },
  buttons: {
    padding: 2,
    marginTop: 30,
  },
});
