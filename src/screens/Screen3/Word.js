import { StyleSheet, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from '../Context';
import { getPlayer } from '../../services/services';
import { Player } from '../../components/Components'

const Word = () => {
  const { word, setWord } = useContext(Context);
  const [result, setResult] = useState([]);

  useEffect(() => {
    data(word);
  }, []);

  const data = async (searchTerm) => {
    const url = `https://api.balldontlie.io/v1/players?search=${searchTerm}`;
    const apiKey = '881c21ff-e5a1-4a57-bfde-b55e54f2ef77';
    const response = await getPlayer(url, apiKey);

    let newArray = response.data.map(
      (element) =>
        (element =
          element.first_name +
          ' ' +
          element.last_name +
          ' - ' +
          element.team.full_name +
          ' - ' +
          element.position)
    );
    setResult(newArray);
  };

  return (
    <View style={styles.layout}>
      {result.map((element) => (
        <Player name={element}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  }
});

export default Word;
