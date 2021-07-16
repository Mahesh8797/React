import React,{Component} from 'react';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import {JSX} from './components/JSX';
import State from './components/State'
import Counter from './components/Counter'
import Destructure from './components/Destructure'
import EventHandling from './components/EventHandling'
import EventBind from  './components/EventBind'
import Parent from './components/Parent'
import CondRender from './components/CondRender'
import ListRender from './components/ListRender'
import StyleSheet from './components/StyleSheet'
import InlineSheet from './components/InlineSheet'
import styles from './components/styles.module.css'
import  './components/Style.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import UpdateLifeCycle from './components/UpdateLifeCycle'
class App extends Component{
  render()
  {
  return (
    <div className="App">
    <UpdateLifeCycle/>
     {/*<LifeCycleA/>
   <Form></Form>
    <h1 className="error">Error</h1>
    <h1 className={styles.success}>Success</h1>
    <InlineSheet/>
     <StyleSheet primary={true}></StyleSheet>
    <InlineSheet></InlineSheet>
   <CondRender></CondRender>
    <ListRender></ListRender>
    <Parent></Parent>
     <First name="mahe" initial="Y">
     <h3>I may change my initial</h3>
     </First>
     <First name="aarthi" initial="D"/>
      <Second name="Yog" />
      <JSX/>
     <State/>
     <Counter/>
     <Destructure fname="M" lname="Y" ></Destructure>
     <EventHandling/>
  <EventBind/>*/}
    </div>
  );
}
}

export default App;
