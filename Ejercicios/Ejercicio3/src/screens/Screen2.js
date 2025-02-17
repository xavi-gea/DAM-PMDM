import { useContext } from 'react';
import Context from './Context';
import { View, Image } from 'react-native';

export default function Screen2() {
  const { uris, setUris } = useContext(Context);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {uris.map((value, index) => (
        <Image
          key={index.toString()}
          style={{
            width: 150,
            height: 150,
          }}
          source={{
            uri: value,
          }}
        />
      ))}
    </View>
  );
}
