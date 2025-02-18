import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from './src/services/Context';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens/Home';

import {Ejercicio2} from './src/screens/Ejercicio2/Ejercicio2'
import {Ejercicio3} from './src/screens/Ejercicio3/Ejercicio3'
import {Ejercicio4} from './src/screens/Ejercicio4/Ejercicio4'

export default function App() {

  const Stack = createStackNavigator();

  return (

    <Provider>
      <NavigationContainer>
        <Stack.Navigator options="false">
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Ejercicio2' component={Ejercicio2}/>
          <Stack.Screen name='Ejercicio3' component={Ejercicio3}/>
          <Stack.Screen name='Ejercicio4' component={Ejercicio4}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
