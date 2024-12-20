import { Text, Image, View, Pressable, StyleSheet } from 'react-native';

export default function Card(props){

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={{ width: '50%', alignItems: 'center' }}>
          <Text style={styles.text} onPress={props.back}>
            {props.name}
          </Text>
          <Image
            style={{
              width: 120,
              height: 120,
            }}
            source={{
              uri: props.img,
            }}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Pressable onPress={props.previous} style={styles.button}>
          <Text style={styles.buttonText}>Anterior</Text>
        </Pressable>
        <Pressable onPress={props.next} style={styles.button}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 12,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flexDirection: 'row'
  },
});
