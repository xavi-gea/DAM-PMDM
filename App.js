import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ejercicio1 from './screens/Ejercicio1/Ejercicio1';
import { Provider } from './screens/Ejercicio1/Context';

import Ejercicio2 from './screens/Ejercicio2/Ejercicio2';
import Card from './screens/Ejercicio2/Card';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Ejercicio2Stack = () => {

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name='Ejercicio2Stack'
          component={Ejercicio2}
          options={{headerShown:false, headerMode: 'none'}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="Card"
          component={Card}
          options={{ headerShown: true, headerMode: "none" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Ejercicio1" 
            component={Ejercicio1} 
          />
          <Tab.Screen
            name="Ejercicio2"
            component={Ejercicio2Stack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}