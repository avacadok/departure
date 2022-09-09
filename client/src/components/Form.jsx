import React, { useState } from "react";

const Form = (props) => {

  return (
    <div className="form-input">
      <div>
        <input
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
          required={props.required}
          pattern={props.pattern} />
      </div>
      
      <span>{props.errorMessage}</span>
    </div>
  )
}

export default Form;