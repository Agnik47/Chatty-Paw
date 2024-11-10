import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { login, signUp } from "../../config/firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault(); // Fixed typo here
    if (currentState === "Sign Up") {
      signUp(userName, email, password);
    }
    else {
      login(email, password); 
    }
  };

  return (
    <div className="Login">
      <img src={assets.logo_big} alt="" className="Logo" />

      <form onSubmit={onSubmitHandler} action="" className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign Up" ? (
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username" 
            required
            onChange={(e)=> setUserName(e.target.value)}
            value={userName}
          />
        ) : null}
        <input
          type="email"
          id="email-adress"
          name="email" 
          placeholder="Enter your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="login-button">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-Terms">
          <p>
            By signing up, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
          <input type="checkbox" id="terms" name="terms" required />
        </div>
        <div className="login-toggle">
          {currentState === "Sign Up" ? (
            <p>
              Already have an Account?{" "}
              <span onClick={() => setCurrentState("Login")}>Log in</span>
            </p>
          ) : (
            <p>
              Don't have any account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>
                Create an account
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
