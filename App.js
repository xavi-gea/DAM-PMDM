import { StyleSheet, Text, View } from 'react-native';
import Ejercicio1 from './screens/Ejercicio1/Ejercicio1';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from './screens/Context';
import First from './screens/Ejercicio2/First';
import Second from './screens/Ejercicio2/Second';

import First3 from './screens/Ejercicio3/First3';
import Second3 from './screens/Ejercicio3/Second3';

import First4 from './screens/Ejercicio4/First4';
import Second4 from './screens/Ejercicio4/Second4';

export default function App() {

  const Stack = createStackNavigator();

  return (
    // Ejercicio 1

    //<Ejercicio1/>

    // Ejercicio 2

    // <Provider>
    //   <NavigationContainer>
    //     <Stack.Navigator options='false'>
    //       <Stack.Screen name='First' component={First}></Stack.Screen>
    //       <Stack.Screen name='Second' component={Second}></Stack.Screen>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>

    // Ejercicio 3

    // <Provider>
    //   <NavigationContainer>
    //     <Stack.Navigator options='false'>
    //       <Stack.Screen name='First3' component={First3}></Stack.Screen>
    //       <Stack.Screen name='Second3' component={Second3}></Stack.Screen>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>

      // Ejercicio 4

      <Provider>
      <NavigationContainer>
        <Stack.Navigator options='false'>
          <Stack.Screen name='First4' component={First4}></Stack.Screen>
          <Stack.Screen name='Second4' component={Second4}></Stack.Screen>
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
