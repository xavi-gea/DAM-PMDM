import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import { Search } from "./Search";
import AudioRecorder from "./AudioRecorder";


export function Ejercicio2(props) {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator options="false">
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
      <Stack.Screen name="AudioRecorder" component={AudioRecorder}/>
    </Stack.Navigator>
  )
    
    
}