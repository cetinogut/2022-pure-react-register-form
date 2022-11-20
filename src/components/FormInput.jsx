import React, {useState} from 'react';
import './formInput.css';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const {label,errorMessage, onChange, id, ...inputProps }= props; //we need to separate label to use it with label element, and separete onChange to give it to the input field onChange event as below.

const handleFocus = (e) => {
    setFocused(true);
}
  return (
    <div className='formInput'>
        <label htmlFor="">{label}</label>
        {/* <input placeholder={ props.placeholder } onChange= {e => props.setUsername(e.target.value)} /> */}
        <input 
            {...inputProps} 
            onChange={ onChange } 
            onBlur= {handleFocus} 
            onFocus=  { () => inputProps.name === 'confirmPassword' && setFocused(true)}
            focused={focused.toString()} 
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput