import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pokemon(props){

  const navigation = useNavigation();

  return (
    <View style={{ width: "50%", alignItems: "center" }}>
      <Text style={STYLES.text}>{props.name}</Text>
      <Pressable onPress={() => navigation.navigate('Card', {
        name: props.name,
        imgList: props.uri
      })}>
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={{
            uri: props.uri[0],
          }}
        />
      </Pressable>
    </View>
  );
};

const STYLES = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});