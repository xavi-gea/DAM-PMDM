import { StyleSheet, View } from 'react-native';
import { Form } from '../../components/Components';
import { useContext, useState } from 'react';
import Context from '../Context';


const Home = (props) => { 
  const [searchTerm, setSearchTerm] = useState('');
  const { word, setWord} = useContext(Context);

  const onSubmit = (term) => {
    setSearchTerm(term);
    setWord(term);
    props.navigation.navigate('Word')
  }

  return (
    <View style={styles.layout}>
      <Form onSubmit={onSubmit} text={searchTerm} />
    </View>
  );
};

const styles = StyleSheet.create({ 
  layout: {
    flex: 1,
    justifyContent: 'center', padding: 8,
  }
});

export default Home;
