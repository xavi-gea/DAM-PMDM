import { useState } from 'react'
import { Text, View, Pressable } from 'react-native'


export default function App() {

  let [calContent, setCalContent] = useState("0")
  let [previousNumber,setPreviousNumber] = useState(0)
  let [pendingOperation,setPendingOperation] = useState("")

  let [firstOperands, setFirstOperands] = useState([])
  let [secondOperands, setSecondOperands] = useState([])
  let tempNumbers = [];

  function handleClear(){

    setCalContent("0")
    setFirstOperands([])
    setSecondOperands([])
    setPendingOperation("");
  }

  function handleInputNumber(inputNumber){

    var formatedNumber = formatNumber(inputNumber)

    if (formatedNumber.length < 12) {
      
      if (pendingOperation == "") {
      
        tempNumbers = firstOperands;
        tempNumbers.push(formatedNumber);
        setFirstOperands(tempNumbers);
    
        setCalContent(firstOperands.join(""))
  
      }else{

        tempNumbers = secondOperands;
        tempNumbers.push(formatedNumber);
        setSecondOperands(tempNumbers);

        setCalContent(secondOperands.join(""))
      }
    }
  }

  function formatNumber(number){

    return number.toString()
  }

  function handleOperation(operation){

    let numberToOperate = parseFloat(calContent)

    setCalContent()
    
    operation = operation.toLowerCase()
    let result = 0

    if (operation == "sin") {

      result = formatNumber(Math.sin(numberToOperate))

    }else if(operation == "cos"){

      result = formatNumber(Math.cos(numberToOperate))

    }else if(operation == "tan"){

      result = formatNumber(Math.tan(numberToOperate))

    }else if(operation == "deg"){

      result = formatNumber((numberToOperate * (180 / Math.PI)))

    }else if(operation == "loge"){

      result = formatNumber(Math.log(numberToOperate))

    }else if(operation == "log10"){

      result = formatNumber(Math.log10(numberToOperate))

    }else if(operation == "pi"){

      result = formatNumber(Math.PI)

    }else if(operation == "rad"){

      result = formatNumber((numberToOperate * (Math.PI / 180)))

    }else if(operation == "int"){

      result = formatNumber(1 / numberToOperate)

    }else if(operation == "fac"){

      result = formatNumber(factorial(numberToOperate))

    }else if(operation == "sqr"){

      result = formatNumber(Math.sqrt(numberToOperate))

    }else if(operation == "equ"){

      console.log("Equals");
      console.log("valor de firstOperands: " + firstOperands)
      console.log("valor de secondOperands: " + secondOperands)

      if (pendingOperation == "div") {
        
        result = (previousNumber / numberToOperate)

      } else if (pendingOperation == "mult") {
        
        result = (previousNumber * numberToOperate)

      }else if (pendingOperation == "sub") {
        
        result = (previousNumber - numberToOperate)

      }else if (pendingOperation == "sum") {
        
        result = (previousNumber + numberToOperate)
      }

      //setPendingOperation("")

    }else{

      setPendingOperation(operation)
      setPreviousNumber(numberToOperate)
    }

    result = result.toString();

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
