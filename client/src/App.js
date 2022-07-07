import './App.css';
import { Route } from 'react-router-dom'
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import React, { useEffect, useState } from 'react';
import SingUp from './pages/signup/SignUp';
import Posts from './pages/posts/Posts';
import axios from 'axios';



axios.defaults.withCredentials = true;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:8080/auth/refresh', {
      headers: {'Content-Type': 'application/json'},
    })
    .then((res) => {
      setUserInfo(res.data);
      setIsLogin(true);
    })
  }, [isLogin])

  

  return (
    <>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SingUp />
      </Route>
      <Route path="/posts">
        <Posts userInfo={userInfo}/>
      </Route>
    </>
  );
}

export default App;
