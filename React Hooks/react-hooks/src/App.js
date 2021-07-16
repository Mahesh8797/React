import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CustomHooks/CounterOne'
import CounterTwo from './components/CustomHooks/CounterTwo'


function App() {
 
  return (
    <div className="App">
    <CounterOne/>
    <CounterTwo/>
    </div>
  );
}

export default App;
