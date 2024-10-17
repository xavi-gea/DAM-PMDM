import { useState } from 'react'
import { Text, View, Pressable } from 'react-native'


export default function App() {

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

  function handleInputNumber(inputNumber){

    let formatedNumber = formatNumber(inputNumber)

    if (formatedNumber.length < 12) {

      tempNumbers = operands
      tempNumbers.push(formatedNumber)
      setOperands(tempNumbers)
  
      setCalContent(operands.join(""))
    }
  }

  function formatNumber(number){

    return number.toString()
  }

  function handleOperation(operation){

    let numberToOperate = parseFloat(calContent)

    setCalContent()
    setOperands([])
    
    operation = operation.toLowerCase()
    let result = 0

    switch (operation) {

      case "sin":   result = formatNumber(Math.sin(numberToOperate)); break;
      case "cos":   result = formatNumber(Math.cos(numberToOperate)); break;
      case "tan":   result = formatNumber(Math.tan(numberToOperate)); break;
      case "deg":   result = formatNumber(numberToOperate * (180 / Math.PI)); break;
      case "loge":  result = formatNumber(Math.log(numberToOperate)); break;
      case "log10": result = formatNumber(Math.log10(numberToOperate)); break;
      case "pi":    result = formatNumber(Math.PI); break;
      case "rad":   result = formatNumber(numberToOperate * (Math.PI / 180)); break;
      case "int":   result = formatNumber(1 / numberToOperate); break;
      case "fac":   result = formatNumber(factorial(numberToOperate)); break;
      case "sqr":   result = formatNumber(Math.sqrt(numberToOperate)); break;

      case "equ":

        switch (pendingOperation) {

          case "div":  result = (previousNumber / numberToOperate); break;
          case "mult": result = (previousNumber * numberToOperate); break;
          case "sub":  result = (previousNumber - numberToOperate); break;
          case "sum":  result = (previousNumber + numberToOperate); break;
        }
        
      break;

      default:
        setPendingOperation(operation);
        setPreviousNumber(numberToOperate);
        break;
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
    <View style={{ justifyContent: 'center', alignSelf: "center", marginVertical: 80 }}>

      <Text style={{ fontSize: 45, fontWeight: "bold" }}>Calculadora</Text>

      <View style={{ marginTop: 5 }}>
        <View style={{ flexDirection: "row", marginBottom: 10, height: 70, width: 340, borderRadius: 4, borderWidth: 1 }}>
          <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}>{calContent}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("sin")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>sen</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("cos")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>cos</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("tan")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>tan</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("deg")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>deg</Text></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("logE")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>ln</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("log10")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>log</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("pi")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>&Pi;</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("rad")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>rad</Text></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("int")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>1/X</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("fac")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>!</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("sqr")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>√</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("div")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>/</Text></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(7)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>7</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(8)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>8</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(9)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>9</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("mult")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>x</Text></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(4)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>4</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(5)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>5</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(6)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>6</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("sub")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>-</Text></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(1)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>1</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(2)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>2</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(3)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>3</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("sum")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>+</Text></Pressable>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 3 }}>
            <Pressable onPress={handleClear} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>C</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(0)} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'blue' }}><Text>0</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={()=> handleInputNumber(".")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>,</Text></Pressable>
          </View>
          <View style={{ padding: 3 }}>
            <Pressable onPress={() => handleOperation("equ")} style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', width: 80, height: 80, backgroundColor: 'gray' }}><Text>=</Text></Pressable>
          </View>
        </View>
      </View>

    </View>
  )
}
