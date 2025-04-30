import React, { useState } from 'react';
const Day6 = () => {
    return (
      <div>
        <Calculator />
      </div>
    )
  }
  
  export default Day6;



// "Easy Calculator"
// "Lifting State Up"
// "Child to Parent data"

const CalculatorInputs = ({ onInputChange }) => {
  return(
    <div style={{display: 'flex', gap:'8px'}}>
      <input 
        type="number"
        placeholder="Enter Your First Number"
        onChange={(e) => onInputChange('num1', e.target.value)}
        style={inputStyle}
      />
      <input 
        type="number"
        placeholder="Enter Your Sec Number"
        onChange={(e) => onInputChange('num2', e.target.value)}
        style={inputStyle}
      />
    </div>
  )
}

const Calculator = () => {
  const [inputs, setInputs] = useState({num1: 0, num2: 0})


  const inputHandleChange = (field, value) => {
    setInputs(prev => ({
      ...prev, 
      [field]: Number(value) || 0
    }))
  }

  const sum = inputs.num1 + inputs.num2;

  return(
    <div style={{border:'1px solid black', marginTop:'32px', padding:'20px'}}>
      <h2 style={textCenter}>Easy Calculator</h2>
      <h2 style={textCenter}>Lifting State Up</h2>
      <h2 style={textCenter}>Child to Parent data</h2>

      <CalculatorInputs onInputChange={inputHandleChange} />

      {inputs.num1 !== "" && inputs.num2 !== "" && (
        <p><h3>Result:</h3> {sum}</p>
      )}

    </div>
  )
}

const textCenter = {
  textAlign: 'center'
}

const inputStyle = {
  padding: '8px 16px'
}