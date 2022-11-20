import React, { useState, useRef } from 'react'

import './App.css';
import FormInput from './components/FormInput';
//import FormInputRef from './components/FormInputRef';

const App = () => {
//const [username, setUsername] = useState('');//re-renders every change and we dont want to write a state hook for every input field so lets use a different one for general usee.
//const usernameRef = useRef();
const [values, setValues] = useState({
  username:'',
  email:'',
  birthday:'',
  password:'',
  confirmPassword:''
});

const inputs= [
  {
    id:1,
    name:'username',
    type:'text',
    placeholder:'enter username',
    errorMessage:'username should be 3-20 characters long, no special chars allowed',
    label:'Username',
    required: true,
    pattern:'^[A-Za-z0-9]{3,16}$',
  },
  {
    id:2,
    name:'email',
    type:'email',
    placeholder:'enter email',
    errorMessage:'It should be a valid email address',
    label:'Email',
    required: true,
  },
  {
    id:3,
    name:'birthday',
    type:'date',
    placeholder:'enter birthday',
    errorMessage:'',
    label:'Birthday'
  },
  {
    id:4,
    name:'password',
    type:'text',
    placeholder:'enter password',
    errorMessage:'password should be 8-20 characters long, and should include at least 1 letter, 1 number and 1 special character',
    label:'Password',
    required: true,
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  },
  {
    id:5,
    name:'confirmPassword',
    type:'password',
    placeholder:'enter password again',
    errorMessage:'passwords don\'t match!!!',
    label:'Confirm Password',
    required: true,
    pattern: values.password,
  },
  
]

 
  //console.log('username: ', username);
  console.log('re-rendered');

const handleSubmit = (e) => {
  e.preventDefault(); // prevents submit button to clear the form before submitting it.
  //console.log(usernameRef);
}

const onChange = (e)=>{
  setValues({...values, [e.target.name]: e.target.value})
}
console.log('VALUES :' , values);
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        {/* <FormInput placeholder='Username' setUsername={setUsername} /> */}
        {/* <FormInputRef placeholder='Email' refer= {usernameRef} /> */}
        <h1>Register</h1>
        {inputs.map((input) =>(
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}
          />
        ))}
        
        
        <button>Submit</button>
      </form>
    </div>
  )
};

export default App;