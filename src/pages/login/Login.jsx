import React, { useState } from 'react'
import "./Login.css"
import assets from "../../assets/assets"
const Login = () => {
    const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='Login'>
       <img src={assets.logo} alt=""  className='Logo'/>

       <form action="" className='login-form'>
          <h2>{currentState}</h2>
            {currentState === "Sign Up" ? <input type='text'  id='username' name='username' placeholder='Enter your username' required />: null} 
            <input type='email' id='email-adress' name='password' placeholder='Enter your email address' required />
            <input type='password' id='password' name='password' placeholder='Enter your password' required />
          <button type='submit' className='login-button'>{currentState === "Sign Up" ? "Create Account" : "Login" }</button>
          <div className="login-Terms">
          <p>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
          <input type="checkbox" id="terms" name="terms" required />
          </div>
          <div className="login-toggle">
            {currentState === "Sign Up"
            ? <p>Already have an Account?  <span onClick={()=> setCurrentState("Login")}>Log in</span></p>
            : <p>Don't have any account? <span onClick={()=> setCurrentState("Sign Up")}>Create an account</span></p>}
           
          </div>

       </form>
    </div>
  )
}

export default Login    