import { useContext } from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';

import Context from './Context';

export default function Rick(props) {

  const {chosenRicksIDs, setChosenRicksIDs} = useContext(Context);
  const {ricksToShow} = useContext(Context);
  const {ricksUniqueKeys, setRicksUniqueKeys} = useContext(Context);
  
  const handleOnPress = (rickID) => {

    let rickUniqueKey = props.propKey;

    if (!ricksUniqueKeys.includes(rickUniqueKey) && !ricksToShow.includes("all")) {
      
      const currentRicks = [...chosenRicksIDs];
      const currentRickKeys = [...ricksUniqueKeys];
  
      currentRicks.push(rickID);
      currentRickKeys.push(rickUniqueKey);
      
      setChosenRicksIDs(currentRicks);
      setRicksUniqueKeys(currentRickKeys);
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
    //display: "none"
    opacity: 0.5
  }
});