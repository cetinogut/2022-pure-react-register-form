import React from 'react';
import './formInput.css';

const FormInputRef = (props) => {
  
  return (
    <div className='formInput'>
        <label htmlFor="">Username</label>
        <input placeholder={ props.placeholder } ref={ props.refer } />
    </div>
  )
}

export default FormInputRef;