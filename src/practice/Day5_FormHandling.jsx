import { useState } from "react";

const Day5 = () => {
    return (
      <div style={styles.container}>
        <FormHandling />

        <LiveInputDisplay />
      </div>
    )
  }
  
export default Day5;



// "Log in Form"
const FormHandling = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email.trim() || !password.trim()) {
      alert('Please Fullfill the InputBox')
      return;
    }

    alert(`Logged in with Email ${email} and Password ${password}`);
    console.log(`Logged in with Email ${email} and Password ${password}`);

    setEmail('')
    setPassword('')
  }

  return (
    <div style={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Log In Form :</h2>
        <input 
          type="email" 
          value={email} 
          placeholder="Enter Your Email" 
          onChange={(e) => setEmail(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="password" 
          value={password} 
          placeholder="Enter Your Password" 
          onChange={(e) => setPassword(e.target.value)} 
          style={styles.input}
        /> 
        <br />
        <input 
          type="submit" 
          value={"login"}  
          style={styles.submit}
        />
      </form>
    </div>
  )
}



// "Live Input Viewer"
const LiveInputDisplay = () => {
  const [inputValue, setInputValue] = useState('');

  return(
    <div style={styles.formWrapper}>
      <h2 style={styles.heading}>Live Input Viewer :</h2>
      <input 
        type="text" 
        value={inputValue} 
        placeholder="type something" 
        onChange={(e)=> setInputValue(e.target.value)}
        style={styles.input}
      />
      <p><strong>You Typed:</strong> {inputValue}</p>
    </div>
  )
}



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  formWrapper: {
    backgroundColor: '#f5f5f5',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '300px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  submit: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};





