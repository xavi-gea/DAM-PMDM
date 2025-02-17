import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/components/Home';
import ScreenAPI from './src/components/ScreenAPI';

export default function App() {

  const Tab = createBottomTabNavigator();
  const tabNavigation = (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='ScreenAPI' component={ScreenAPI}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
  
  const Stack = createStackNavigator();
  const stackNavigation = (
    
    <NavigationContainer>
      <Stack.Navigator options="false">
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ScreenAPI' component={ScreenAPI}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  const Drawer = createDrawerNavigator();
  const drawerNavigation = (

    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={false} initialRouteName="Home">
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='ScreenAPI' component={ScreenAPI}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );

  // const Stack = createStackNavigator(); // se comenta porque ya ha sido declarado
  const modalNavigator = (

    <NavigationContainer>
        <Stack.Navigator options="false">
          <Stack.Group>
            <Stack.Screen name='Home' component={Home}/>
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen 
              name='ScreenAPI' 
              component={ScreenAPI} 
              options={{headerShown: true, headerMode: 'none'}}
            />
          </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );

  return (
    //tabNavigation

    //stackNavigation

    //drawerNavigation

    modalNavigator
  );
}