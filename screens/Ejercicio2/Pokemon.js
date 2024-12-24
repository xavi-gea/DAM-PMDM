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
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    marginTop: 35,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '30%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});