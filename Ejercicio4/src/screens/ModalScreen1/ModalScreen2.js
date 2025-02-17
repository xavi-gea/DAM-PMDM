import { StyleSheet, Pressable, Text, View } from 'react-native';

const ModalScreen2 = ({ navigation }) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Screen 2</Text>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
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
});

export default ModalScreen2;
