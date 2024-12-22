import { Text, View, Image, Pressable, StyleSheet } from 'react-native';

export default function Rick(props) {
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