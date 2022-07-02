import './App.css';
import { Route, Router } from 'react-router-dom'
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import React from 'react';
import SingUp from './pages/signup/SignUp';
import Posts from './pages/posts/Posts';
import Post from './components/mainData/Post';

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
      <Route path="/posts">
        <Posts />
      </Route>
      <Route >
        <Post />
      </Route>
    </>
  );
}

export default App;
