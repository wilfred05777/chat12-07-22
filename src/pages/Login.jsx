import React from "react";

const Login = () => (
  <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chat Bot2022</span>
      <span className="title">Login</span>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign In</button>
      </form>
      <p>You don't have an account? Register</p>
    </div>
  </div>
);
export default Login;
