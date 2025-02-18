import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Word from './Word';

const Stack = createStackNavigator();

const Screen3 = () => (
  <Stack.Navigator options="false">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Word" component={Word} />
  </Stack.Navigator>
);

export default Screen3;