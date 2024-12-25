import { useContext, useState } from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';

import Context from './Context';

export default function Rick(props) {

  const {chosenRicks, setChosenRicks} = useContext(Context);

  const handleOnPress = (rickID) => {

    let currentRicks = chosenRicks;

    currentRicks.push(rickID);

    console.log(`chosenRicks Rick.js: ${currentRicks}`);
    
    setChosenRicks(currentRicks);
  }

  return (
    <View style={{ padding: 3 }}>
      <Pressable
        style={{
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          textAlignVertical: "center",
          width: 80,
          height: 80,
          backgroundColor: "blue",
        }}
        onPress={() => handleOnPress(props.id)}
      >
        <Image
          style={STYLES.tinyPhoto}
          source={{
            uri: props.uri,
          }}
        />
      </Pressable>
    </View>
  );
}

const STYLES = StyleSheet.create({
  tinyPhoto: {
    width: 80,
    height: 80,
  },
});