import React from 'react'
import './formInput.css'

function FormInput(props) {
  return (
    <div classneme = 'formInput'>
      {/*<label>Username</label>*/}
      <input 
      ref = {props.refer}
      placeholder = {props.placeholder} 
      />
    </div>
  )
}

export default FormInput

