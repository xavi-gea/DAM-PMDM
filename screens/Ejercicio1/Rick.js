import { useContext, useState } from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';

import Context from './Context';

export default function Rick(props) {

  const {chosenRicks, setChosenRicks} = useContext(Context);
  const {ricksSelected, setRicksSelected} = useContext(Context);
  const {ricksToShow, setRicksToShow} = useContext(Context);
  const [ricksUniqueKeys, setRicksUniqueKeys] = useState([]);

  const handleOnPress = (rickID) => {

    const rickUniqueKey = props.propKey;

    if (!ricksUniqueKeys.includes(rickUniqueKey)) {
      
      const currentRicks = [...chosenRicks];
      const currentRickKeys = [...ricksUniqueKeys]

      let currentRicksSelected = ricksSelected;
  
      currentRicks.push(rickID);
      currentRickKeys.push(rickUniqueKey);
      currentRicksSelected++;
      
      setChosenRicks(currentRicks);
      setRicksUniqueKeys(currentRickKeys);
      setRicksSelected(currentRicksSelected);
    }
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
          style={ricksToShow.includes(props.id) || ricksToShow.includes("all") ? STYLES.tinyPhoto : STYLES.tinyPhotoHidden}
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
  tinyPhotoHidden: {
    width: 80,
    height: 80,
    display:"none"
  }
});