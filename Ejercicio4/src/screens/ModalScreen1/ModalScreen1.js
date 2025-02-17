import { StyleSheet, Text, View, Pressable } from 'react-native';

const ModalScreen1 = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Screen 1</Text>
      <View style={styles.box}>
        <Pressable
          onPress={() => props.navigation.navigate('ModalScreen2')}
          style={styles.button}>
          <Text style={styles.buttonText}>Go to Screen 2</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: 20,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
      box: {
        marginBottom: 75
    }
});

export default ModalScreen1;
