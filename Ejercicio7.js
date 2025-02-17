import { Pressable, Image, TextInput, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState('David');
  const [position, setPosition] = useState(0);
  const [photo, setPhoto] = useState();
  const [id, setId] = useState();
  const [login, setLogin] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      if (response.ok) {
        const resp = await response.json();
        setData(resp.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProfile = () => {
    setPhoto(data[position].avatar_url);
    setLogin(data[position].login);
    setId(data[position].id);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photo }} />
      <Text>{login}</Text>
      <Text>{id}</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta término de búsqueda"
        onChangeText={(newText) => setSearchTerm(newText)}
        defaultValue={searchTerm}
      />
      <Pressable onPress={getData} style={styles.button}>
        <Text style={styles.buttonText}>Buscar perfiles</Text>
      </Pressable>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta posición"
        onChangeText={(newText) => setPosition(newText)}
        defaultValue={position}
      />
      <Pressable onPress={getProfile} style={styles.button}>
        <Text style={styles.buttonText}>Mostrar perfil</Text>
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
  image: {
    width: 375,
    height: 300,
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
