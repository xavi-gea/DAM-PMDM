import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ejercicio1 from './screens/Ejercicio1/Ejercicio1';
import Ejercicio2 from './screens/Ejercicio2/Ejercicio2';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from './screens/Context';
import First from './screens/Ejercicio3/First';
import Second from './screens/Ejercicio3/Second';

import First2 from './screens/Ejercicio4/First2';
import Second2 from './screens/Ejercicio4/Second2';
import Ejercicio5 from './screens/Ejercicio5/Ejercicio5';

export default function App() {

  const Stack = createStackNavigator();

  return (
    
    // Ejercicio 1

    //<Ejercicio1/>

    // Ejercicio 2

    //<Ejercicio2/>

    // Ejercicio 3

    // <Provider>
    //   <NavigationContainer>
    //     <Stack.Navigator options="false">
    //       <Stack.Screen name='First' component={First}/>
    //       <Stack.Screen name='Second' component={Second}/>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>

    // Ejercicio 4

    // <Provider>
    //   <NavigationContainer>
    //     <Stack.Navigator options="false">
    //       <Stack.Screen name='First2' component={First2}/>
    //       <Stack.Screen name='Second2' component={Second2}/>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>

    // Ejercicio 5

    <Ejercicio5/>
  );
}