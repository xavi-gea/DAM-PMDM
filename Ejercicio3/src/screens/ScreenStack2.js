import { StyleSheet, Pressable, Text, View } from 'react-native';

const ScreenStack2 = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Screen Stack 2</Text>
      <Pressable
        onPress={() => props.navigation.navigate('ScreenStack3')}
        style={styles.button}>
        <Text style={styles.buttonText}>Go to Screen Stack 3</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
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

export default ScreenStack2;
