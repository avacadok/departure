import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerStat, setRegisterStat] = useState(false);

  const userRegister = (e) => {
    e.preventDefault();
    axios.post('/register', { username, email, password })
      .then((response) => {
        console.log(response);
        setRegisterStat(true);
        setUsername('');
        setEmail('');
        setPassword('');
      })
      .catch(err => console.log("err from register", err))
  }
  return (
    <>
      <div className="page-title">Hello Traveler</div>

      <section className="login-section">
        <div className="login-info">
          <Link to={'/login'} className="user-login">Log in</Link>
          <Link to={'/register'} className="user-signup">Sign Up</Link>
        </div>

        {registerStat ? <p className="register-msg">Welcome to Depawture <b>PAWRENT</b>, please click the <b>LOG IN</b> button to sign into your account 🖤</p> : <></>}

        <form onSubmit={userRegister}>

          <Form placeholder={'Username'} type={'text'} value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          errorMsg={'Username should be 3 to 12 characters and should not include any special characters'} required={true} 
          pattern={'^[A-Za-z0-9]{3,12}'} />

          <Form placeholder={'Email'} type={'email'} value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          errorMsg={'Please enter a valid email address'} 
          required={true} />

          <Form placeholder={'Password'} type={'text'} value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          errorMsg={'Password should be 6 to 20 characters long and include at least 1 number, 1 letter and 1 special character'} 
          required={true} 
          pattern={'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$'}/>

          <Form placeholder={'Confirm password'} type={'text'} value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required={true} 
          errorMsg={'Please enter the same password as above'} 
          pattern={password}
          />

          <button className="confirm-button" type="submit" >
            Sign up
          </button>
        </form>

      </section>
    </>
  )

}

export default Register;