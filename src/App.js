import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home'
import About from './Component/About'
import Login from './Component/Login.js'
import './App.css';
import Header from './Component/Header'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
