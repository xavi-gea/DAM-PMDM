import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function App() {

  const PRESSABLES = [
    ["sen", "cos", "tan", "deg"],
    ["ln", "log", "π", "rad"],
    ["1/X", "!", "√", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["C", "0", ",", "="]
  ]

  let [calContent, setCalContent] = useState("0")
  let [previousNumber,setPreviousNumber] = useState(0)
  let [pendingOperation,setPendingOperation] = useState("")

  let [operands, setOperands] = useState([])
  let tempNumbers = []

  function handleClear(){

    setCalContent("0")
    setOperands([])
    setPendingOperation("")
  }

  function formatNumber(number){

    return number.toString()
  }

  function handleInput(input){

    if (!isNaN(input) || input == ",") {

      input = input.replace(",",".");

      if (!(input == "." && calContent.includes("."))) {
        
        handleNumber(input)
      }

    }else{

      handleOperation(input)
    }
  }

  function handleNumber(inputNumber){

    let formatedNumber = formatNumber(inputNumber)

    if (formatedNumber.length < 12) {

      tempNumbers = operands
      tempNumbers.push(formatedNumber)
      setOperands(tempNumbers)
  
      setCalContent(operands.join(""))
    }
  }

  function handleOperation(operation){

    let numberToOperate = parseFloat(calContent)

    setCalContent()
    setOperands([])
    
    let result = 0

    switch (operation) {

      case "sen": result = Math.sin(numberToOperate); break
      case "cos": result = Math.cos(numberToOperate); break
      case "tan": result = Math.tan(numberToOperate); break
      case "deg": result = (numberToOperate * (180 / Math.PI)); break
      case "ln":  result = Math.log(numberToOperate); break
      case "log": result = Math.log10(numberToOperate); break
      case "π":   result = Math.PI; break
      case "rad": result = (numberToOperate * (Math.PI / 180)); break
      case "1/X": result = (1 / numberToOperate); break
      case "!":   result = factorial(numberToOperate); break
      case "√":   result = Math.sqrt(numberToOperate); break
      case "C":   handleClear(); break

      case "=":

        switch (pendingOperation) {

          case "/":  result = (previousNumber / numberToOperate); break
          case "x":  result = (previousNumber * numberToOperate); break
          case "-":  result = (previousNumber - numberToOperate); break
          case "+":  result = (previousNumber + numberToOperate); break
        }
        
      break

      default:
        setPendingOperation(operation)
        setPreviousNumber(numberToOperate)
        break
    }

    result = formatNumber(result)

    if (result != "0") {

      if (result.length > 11) {
        
        result = result.substring(0,11)
      }

      setCalContent(result)
    }
  }

  function factorial(number) {

    if (number == 0) {
      
      return 1

    }else{

      return (number * factorial(number -1))
    }
  }

  return (
    <View style={STYLES.mainContainer}>
      <Text style={STYLES.title}>Calculadora</Text>
      <View style={{ marginTop: 5 }}>
        <View style={STYLES.calContentContainer}>
          <Text style={STYLES.calContent}>{calContent}</Text>
        </View>
        {
          PRESSABLES.map((row, index) => (

            <View key={index} style={{ flexDirection: "row" }}>

              {row.map((element, index) => (

                <View key={index} style={{ padding: 3 }}>
                  <Pressable onPress={() => handleInput(element)} style={[STYLES.button, {backgroundColor: isNaN(element) ? 'gray' : 'blue'}]}>
                    <Text key={index}>{element}</Text>
                  </Pressable>
                </View>
              ))}

            </View>
          ))
        }
      </View>
    </View>
  )
}

const STYLES = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center', 
    alignSelf: "center", 
    marginVertical: 80
  },
  title: {
    fontSize: 45, 
    fontWeight: "bold"
  },
  calContentContainer : {
    flexDirection: "row", 
    marginBottom: 10, 
    height: 70, 
    width: 340, 
    borderRadius: 4, 
    borderWidth: 1
  },
  calContent:{
    fontSize: 50, 
    textAlign: "right", 
    flex: 1
  },
  button: {
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlignVertical: 'center', 
    width: 80, height: 80
  }
})