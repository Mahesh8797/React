import React from 'react';
import './App.css';
import Sample from './components/Sample'
import Simple from './components/Simple'
import Forms from './components/Forms'
import Welcome from './components/Welcome'
import MaterialUITabs from './components/MaterialUITabs'
function App() {
  return (
    <div className="App">
    <MaterialUITabs/>
   {/* <Welcome />
     <Forms>
    <h1>I am child property</h1>
    </Forms>
   <Simple/>
      <Sample name="mahe">
      </Sample>*/}
   </div>
  );
}

export default App;
