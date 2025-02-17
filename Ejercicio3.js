import { Pressable, Text, View, StyleSheet } from 'react-native';

export default function App() {
  const getData = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/search/users?q=Java'
      );
      if (response.ok) {
        const resp = await response.json();
        console.log(resp.items[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={getData} style={styles.button}>
        <Text style={styles.buttonText}>Púlsame</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
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
    fontSize: 16,
  },
});
