import { useState } from "react";

const Day3 = () => {
  return (
    <div>
        <CounterApp />

        <LightSwitch />

        <InputExample />
    </div>
  )
}

export default Day3;




// "Counter app (+/- button)"
const CounterApp = () => {
  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>Counter app (+/- button)</h1>
      <h2>* Count: {count}</h2>
      <button style={Styles} onClick={()=> setCount(count + 1)}> + </button>
      <button style={Styles} onClick={()=> setCount(count - 1)}> - </button>
    </div>
  )
}

const Styles = {
  padding: "4px 20px",
  margin: "4px",
  border: "1px solid tomato",
}




// "Light ON/OFF switch"
const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleLight = () => {
    setIsOn (prevState => !prevState)
  }

  return(
    <div>
      <h1>Light ON/OFF switch</h1>
      <p style={{fontSize:'24px'}}>* The Light is {isOn? "ON": "OFF"}</p>
      <button style={onOfBtnStyle} onClick={toggleLight}>{isOn? "OFF":"ON"}</button>
    </div>
  )
}

const onOfBtnStyle = {
  width: "48px",
  height: "24px",
  border: "1px solid green"
}




// "Input value change"
const InputExample = () => {
  const [text, setText] = useState('')

  const inputHandleChange = (e) => {
    setText(e.target.value)
  }

  return(
    <div>
      <h1>Input value change</h1>
      <input style={inputStyle} type="text" value={text} onChange={inputHandleChange}/>
      <p style={{fontSize: "24px"}}>You Typed: {text}</p>
    </div>
  )
}

const inputStyle = {
  width: "220px",
  height: "24px",
  border: "1px solid tomato",
  borderRadius: "8px",
  outline: "none"
}