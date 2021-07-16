import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Tabss from './components/Tabss'
import MaterialUITabs from './components/MaterialUITabs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink ,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <MaterialUITabs/>
  {/*<Tabss/>
   {/* <Router>
    <div>
    <nav>
    <ul>
    <NavLink  to="/">Home</NavLink >
    </ul>
    <ul>
    <NavLink  to="/About">About</NavLink >
    </ul>
    <ul>
    <NavLink  to="/Users">Users</NavLink >
    </ul>
    </nav>
    <Switch>
    <Route path="/About">
    <About name="mahe"/>
    </Route>
    <Route path="/Users">
    <Users name="MY"/>
    </Route>
    <Route path="/">
    <Home name="MD"/>
    </Route>
    </Switch>
    </div>
    <Redirect to ="/Home"></Redirect>
  </Router>*/}
  </div>
);
}


export default App;
