import { StyleSheet, View } from 'react-native';
import Ejercicio1 from './screens/Ejercicio1/Ejercicio1';

import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './screens/Ejercicio2/Context';
import { NavigationContainer } from '@react-navigation/native';
import First from './screens/Ejercicio2/First';
import Second from './screens/Ejercicio2/Second';

import Ejercicio3 from './screens/Ejercicio3/Ejercicio3';

export default function App() {

  const Stack = createStackNavigator();

  return (

    // Ejercicio 1

    // <View style={styles.container}>
    //   <Ejercicio1/>
    // </View>

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

    <Ejercicio3/>
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
