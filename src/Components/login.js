import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const handleRegister = (e) => {

    e.preventDefault();
    
    const user = {
        username: usernameReg,
        password: passwordReg
      }
    
    axios.post('/users/register', user)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });

      // window.location = '/';
  }

  const handleLogin = (e) => {

    e.preventDefault()
    
    const user2 = {
        username: usernameLogin,
        password: passwordLogin
      }

    axios.post('/users/login', user2)
      .then((res) => {
          console.log(JSON.stringify(res.data))
          setLoginStatus(res.data)
      })
      .catch(err => {
        console.log(err)
        setLoginStatus('There was an error. Please try again later.')
      });

    

      // window.location = '/';
  }

  return (
    <div className='auth'>
      <div className="registration">
        <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div class='formgroup'>
          <label>Username</label>
        <input
          type="text"
          id="usernameReg"
          name="usernameReg"
          autocomplete="username"
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
          <button type='submit' value="Register" >Register</button>
        </div>
        </form>
      </div>
      
      <div className="login">
        <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div class='formgroup'>
        <label>Username</label>
        <input
          type="text"
          id="usernameLogin"
          name="usernameLogin"
          autocomplete="username"
          value={usernameLogin}
          onChange={(e) => {
            setUsernameLogin(e.target.value);
          }}
          />
          </div>
          <div class='formgroup'>
          <label>Password</label>
          <input 
            type="password"
            id="passwordLogin"
            name="passwordLogin"
            autocomplete="current-password"
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
          />
          <button type='submit' value="Login">Login</button>
          </div>
          <h1>{loginStatus}</h1>
          </form>
      </div>
    </div>
  )


}

export default Login;