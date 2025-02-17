import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './src/screens/Screen1/Screen1';
import Screen2 from './src/screens/Screen2/Screen2';
import Screen3 from './src/screens/Screen3/Screen3';
import Screen4 from './src/screens/Screen4/Screen4';
import { Provider } from './src/screens/Context';

const Tab = createBottomTabNavigator();

const App = () => (
  <Provider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
