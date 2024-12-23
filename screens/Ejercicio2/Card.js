import { Text, Image, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card({ route }){
  
  const navigation = useNavigation();

  const {name, img} = route.params;

  return (
    <View style={styles.container}>
      <View>
        <View style={{ width: '50%', alignItems: 'center' }}>
          <Text style={styles.text} onPress={() => navigation.goBack()}>
            {name}
          </Text>
          <Image
            style={{
              width: 120,
              height: 120,
            }}
            source={{
              uri: img,
            }}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Pressable onPress={route.previous} style={styles.button}>
          <Text style={styles.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable onPress={route.next} style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
  }
});