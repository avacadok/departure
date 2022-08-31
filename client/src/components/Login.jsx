import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <>
      <div className="page-title">Hello Traveler</div>

      <section className="login-section">
        <div className="login-info">
          <Link to={'/login'} className="user-login">Log in</Link>
          <Link to={'/register'} className="user-signup">Sign Up</Link>
        </div>

        <div className="input-email">
          <input type={'email'} placeholder="Email address" >
          </input>
        </div>

        <form className="input-password">
          <input type={'password'} placeholder="Password" 
          autoComplete="on">
          </input>
        </form>

        <div className="confirm-button">
          Log in
        </div>

      </section>
    </>
  )

}

export default Login;