import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './src/screens/Tab1';
import Tab2 from './src/screens/Tab2';
import Tab3 from './src/screens/Tab3';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={Tab1} />
      <Tab.Screen name="Screen2" component={Tab2} />
      <Tab.Screen name="Screen3" component={Tab3} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;

