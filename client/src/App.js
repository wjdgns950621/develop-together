import './App.css';
import { Route } from 'react-router-dom'
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import React from 'react';
import SingUp from './pages/signup/SignUp';

function App() {

 

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
    </>
  );
}

export default App;
