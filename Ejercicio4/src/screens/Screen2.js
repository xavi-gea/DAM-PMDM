import { Text, ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Context from './Context';
import getData from '../services/services';

export default function Screen2() {
  const { name, setName } = useContext(Context);
  const [result, setResult] = useState([]);

  useEffect(() => {
    data(name);
  }, []);

  const data = async (searchTerm) => {
      const url = `https://api.balldontlie.io/v1/players?search=${searchTerm}`;
    const apiKey = '881c21ff-e5a1-4a57-bfde-b55e54f2ef77';
    const response = await getData(url, apiKey);

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
    <ScrollView>
      {result.map((value) => (
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{value}</Text>
      ))}
    </ScrollView>
  );
}
