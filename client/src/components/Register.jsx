import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/*Create regex for the requirement we will applied on username and password.
username needs to start with letter and followed by letters or numbers or '-' '_' min 6 and max 10 characters
*/
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,10}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;

const Register = () => {
  //set focus to user input when the component loads
  const userRef = useRef();
  //set focus to err if there is one
  const errRef = useRef();
  //states for username
  const [username, setUsername] = useState('');
  const [vaildName, setVaildName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  //state for password 
  const [password, setPassword] = useState('');
  const [vaildPassword, setVaildPassword] = useState(false);
  const [passwordFocus, setPasswordFcous] = useState(false);
  //state for password confirmation
  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false)
  //state for err msg for successful registration msg
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <>
      <div className="page-title">Hello Traveler</div>

      <section className="login-section">
        <div className="login-info">
          <Link to={'/login'} className="user-login">Log in</Link>
          <Link to={'/register'} className="user-signup">Sign Up</Link>
        </div>

        <div className="input-username">
          <input type={'name'} placeholder="Username" onChange={(e) => setUsername(e.target.value)} >
          </input>
        </div>

        <div className="input-email">
          <input type={'email'} placeholder="Email address" >
          </input>
        </div>

        <div className="input-email">
          <input type={'email'} placeholder="Confirm email" >
          </input>
        </div>

        <form className="input-password">
          <input type={'password'} placeholder="Password"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}>
          </input>
        </form>

        <form className="input-password">
          <input type={'password'} placeholder="Confirm password" autoComplete="on">
          </input>
        </form>

        <button className="confirm-button" type="submit">
          Sign up
        </button>

      </section>
    </>
  )

}

export default Register;