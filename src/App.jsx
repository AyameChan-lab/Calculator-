import { useState,useEffect } from 'react'
import './App.css'


function App() {
  
  const [result,setResult] = useState('');
  const [inputDisplay,setInputDisplay] = useState('');
  const [opastatus,setOpaStatus] = useState(true);

  const handelKey = (e)=>{
    setResult(result.concat(e.target.name));
    setInputDisplay(inputDisplay.concat(e.target.textContent));
    const keyText = e.target.textContent ;
    if(keyText == '+' || keyText == '-' || keyText == '÷' || keyText == 'x' || keyText == '.'){
      console.log(result);
      setOpaStatus(false);
    }else {
      setOpaStatus(true);
    }
  }
  const Clear =()=>{
    setResult('');
    setInputDisplay('');
  }
  const Del = ()=>{
    setResult(result.slice(0,result.length -1));
    setInputDisplay(inputDisplay.slice(0,inputDisplay.length-1));
  }
  const findResult=()=>{
    const cclString = eval(result).toString();
    setResult(cclString);
    setInputDisplay(cclString);
  } 
  const checkInput =()=>{
    console.log("OHHHHHHHHHHHHHHHHHHHHHHHHHHH")
    if(result == ''){
      setOpaStatus(false);
    }
  }
  useEffect(()=>{
    checkInput();
  },[result])
  console.log(result);
 
  return (
    <div className="App container mx-auto">
     <div className="callculator cal-box-style">
       <input type="text" className="super-input" value={inputDisplay} disabled="none"></input>
       <div className="keypad mom-box-keypad">
         <button className="super-keypad col-span-2 hover:bg-blue-300/60" onClick={Clear}>Clear</button>
         <button className="super-keypad" onClick={Del}>Del</button>
         <button name="/" className="super-keypad" onClick={opastatus ? handelKey:null}>÷</button>
         <button name="7" className="super-keypad" onClick={handelKey}>7</button>
         <button name="8" className="super-keypad" onClick={handelKey}>8</button>
         <button name="9" className="super-keypad" onClick={handelKey}>9</button>
         <button name="*" className="super-keypad" onClick={opastatus ? handelKey:null}>x</button>
         <button name="4" className="super-keypad" onClick={handelKey}>4</button>
         <button name="5" className="super-keypad" onClick={handelKey}>5</button>
         <button name="6" className="super-keypad" onClick={handelKey}>6</button>
         <button name="-" className="super-keypad" onClick={opastatus ? handelKey:null}>-</button>
         <button name="1" className="super-keypad" onClick={handelKey}>1</button>
         <button name="2" className="super-keypad" onClick={handelKey}>2</button>
         <button name="3" className="super-keypad" onClick={handelKey}>3</button>
         <button name="+" className="super-keypad" onClick={opastatus ? handelKey:null}>+</button>
         <button name="0" className="super-keypad" onClick={handelKey}>0</button>
         <button name="." className="super-keypad" onClick={opastatus ? handelKey:null}>.</button>
         <button className="super-keypad col-span-2 bg-blue-300/60" onClick={findResult}>=</button>
       </div>
     </div>
    </div>
  )
}

export default App
