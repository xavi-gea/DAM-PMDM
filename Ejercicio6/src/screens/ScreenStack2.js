import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  View,
} from 'react-native';
import getData from '../services/services';
import { useState } from 'react';

const ScreenStack2 = (props) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('David');

  const getProfiles = async () => {
    let profiles = await getData(
      `https://api.github.com/search/users?q=${searchTerm}`
    );
    setData(profiles.items);
  };

  const Profiles = () => {
    return data.map((element) => (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: element.avatar_url }} />
        <Text>{element.login}</Text>
        <Text>{element.id}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta término de búsqueda"
        onChangeText={(newText) => setSearchTerm(newText)}
        defaultValue={searchTerm}
      />
      <Pressable onPress={getProfiles} style={styles.button}>
        <Text style={styles.buttonText}>Mostrar perfiles</Text>
      </Pressable>
      <ScrollView>
        <Profiles />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
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

export default ScreenStack2;

