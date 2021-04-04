import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [loginStatus, setLoginStatus] = useState(false);

  axios.defaults.withCredentials = true;

  const handleRegister = (e) => {

    e.preventDefault();
    
    const user = {
        username: usernameReg,
        password: passwordReg
      }
    
    axios.post('/users/register', user)
      .then(res => {
        console.log(res);
        window.location = '/';
      })
      .catch(err => {
        console.log(err);
      });  
  }

  const handleLogin = (e) => {

    e.preventDefault()
    
    const user2 = {
        username: usernameLogin,
        password: passwordLogin
      }

    axios.post('/users/login', user2)
      .then((res) => {
        if (!res.data.auth){
          setLoginStatus(false);
        } else {
          let locStuff = {
            token: res.data.token,
            userId: res.data.result
          }
          localStorage.setItem('token', locStuff);
          setLoginStatus(true);
          window.location = '/';
        }
      })
      .catch(err => {
        console.log(err)
        setLoginStatus(false);
      });

      window.location = '/';
  }

  const userAuthenticated = () => {
    axios.get('/users/isUserAuth', {
      headers: {
        'x-access-token': localStorage.getItem('token').token
      }}).then((res) => {
        console.log(res);
      })
  }

  useEffect(() => {
    axios.get('/users/login')
      .then((response) => {
        if (response.data.loggedIn){
          setLoginStatus(response.data.user.username)
        }
      })
  }, [])

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
          {loginStatus && (
            <button onClick={userAuthenticated}>Check if Authenticated</button>
          )}
          </form>
      </div>
    </div>
  )


}

export default Login;