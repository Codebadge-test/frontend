import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Header from './Component/Header'
import About from './Component/About'
import Home from './Component/Home'
import Register from './Component/Register'
import Dashboard from './Component/Dashboard'

import Cookies from 'js-cookie';
import { Button,Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/Header.css'
var clientID;
var frontend = window.location.origin;
console.log(frontend);
if(process.env.NODE_ENV==="production"){
  clientID="9a3d93461f11673e4164"
}
else{
  clientID="90483cf9b8d2f46424fa"
}
function login(){
    window.location.href=`https://github.com/login/oauth/authorize?client_id=${clientID}`;
    
}

function logout(){
    Cookies.remove('token');
    window.location.href=frontend;
}
function App() {
  if(!Cookies.get('token')){
  return (
    <div className="App">
      <Router>
      <Navbar className="header" bg="white" expand="lg">
            <Navbar.Brand className="toolbar"><Link to="/" className="light"><h2>Codebadge</h2></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content:end">
                <Nav className="ml-auto toolbar-button" >
                    <Nav.Link><Link to="/about" className="light"><Button variant="light">About Us</Button></Link></Nav.Link>
                    <Nav.Link><Link to="/" className="light"><Button variant="light" className="light">Join Us</Button></Link></Nav.Link>
                    <Nav.Link><Link to="/" className="primary"><Button variant="primary" onClick={login} className="primary">Login <i className="fa fa-github" aria-hidden="true"></i></Button></Link></Nav.Link>
                 </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="main mt-15">
        <Switch>
          <Route path="/register">
              <Register/> 
          </Route>
          <Route path="/about">
            <About/> 
          </Route>
          <Route path="/">
            <Home/>  
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
  }
  else{
    return (
      <div className="App">
        <Router>
        <Navbar className="header" bg="white" expand="lg">
              <Navbar.Brand class="toolbar"><Link to="/" className="light"><h2>Codebadge</h2></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content:end">
                  <Nav className="ml-auto toolbar-button" >
                      <Nav.Link><Link to="/about" className="light"><Button variant="light">About Us</Button></Link></Nav.Link>
                      <Nav.Link><Link to="/" className="light"><Button variant="light" className="light">Join Us</Button></Link></Nav.Link>
                      <Nav.Link><Link to="/" className="primary"><Button variant="primary" onClick={logout} className="primary">Logout <i class="fa fa-github" aria-hidden="true"></i></Button></Link></Nav.Link>
                   </Nav>
              </Navbar.Collapse>
          </Navbar>
          <div className="main mt-15">
          <Switch>
            <Route path="/user">
              <Dashboard/>
            </Route>
            <Route path="/register">
              <Register/> 
            </Route>
            <Route path="/about">
              <About/> 
            </Route>
            <Route path="/">
              <Home/>  
            </Route>
          </Switch>
          </div>
        </Router>
      </div>
    )}
}

export default App;
