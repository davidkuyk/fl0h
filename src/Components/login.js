import React, { Component, useState, useEffect } from 'react';

const Login = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  return (
    <div className='auth'>
      <div className="registration">
        <h1>Register</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          />
          <label>Password</label>
          <input type="password" />
          <button>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          />
          <label>Password</label>
          <input type="password" />
          <button>Register</button>
      </div>
    </div>
  )


}

export default Login;