import { StyleSheet, View } from 'react-native';
import { Card } from '../../components/Components';
import { useState, useEffect } from 'react';
import { getData } from '../../services/services';

const Screen1 = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    onPress();
  }, []);

  const onPress = async () => {
    const resp = await getData('https://api.thecatapi.com/v1/images/search');
    setImage(resp[0].url);
  };

  return (
    <View style={styles.layout}>
      <Card width={375} height={375} image={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default Screen1;
