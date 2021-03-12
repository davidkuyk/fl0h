import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const user = {
        username: usernameReg,
        password: passwordReg
      }

      axios.post('/users/register', user)
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err.response.request._response);
        });

      // window.location = '/';
  }

  return (
    <div className='auth'>
      <div className="registration">
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div class='formgroup'>
          <label>Username</label>
        <input
          type="text"
          id="usernameReg"
          name="usernameReg"
          value={usernameReg}
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          />
        </div>
        <div class='formgroup'>
          <label>Password</label>
          <input 
            type="password"
            id="passReg"
            name="passReg"
            autocomplete="current-password"
            onChange={(e) => {
            setPasswordReg(e.target.value);
          }}/>
          <button type='submit' value="Register">Register</button>
        </div>
        </form>
      </div>
      
      <div className="login">
        <form>
        <h1>Login</h1>
        <div class='formgroup'>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          />
          </div>
          <div class='formgroup'>
          <label>Password</label>
          <input type="password" autocomplete="current-password" />
          <button>Login</button>
          </div>
          </form>
      </div>
    </div>
  )


}

export default Login;