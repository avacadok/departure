import React from "react";

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
      
      <span>{props.errorMsg}</span>
    </div>
  )
}

export default Form;