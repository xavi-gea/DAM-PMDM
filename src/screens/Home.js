import { Button } from "react-native";



export function Home(props) {

  return (
    <>
      <Button onPress={() => props.navigation.navigate('Ejercicio2')} title="Ejercicio 2"/>
      <Button onPress={() => props.navigation.navigate('Ejercicio3')} title="Ejercicio 3"/>
      <Button onPress={() => props.navigation.navigate('Ejercicio4')} title="Ejercicio 4"/>
    </>

  )

}