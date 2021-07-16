import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fragment from './components/Fragment'
import ParentComponent from './components/ParentComponent'
import Ref from './components/Ref'
import ParentClick from './components/ParentClick'
import FRParent from './components/FRParent'
import Portal from './components/Portal'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickComponent1 from './components/ClickComponent1'
import HoverComponent1 from './components/HoverComponent1'
import User from './components/User'
import Container from './components/Container'
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/UserComponent'
import ComponentB from './components/ComponentB'
import Posts from './https/Posts'
import PostForm from './https/PostForm'
function App() {
  return (
    <div className="App">
    <PostForm/>
    <Posts></Posts>
    {/*<UserProvider value="MY">
    <ComponentA/>
    </UserProvider>
    <ComponentB/>
    <User render={(isLoggedin)=> isLoggedin?'mahe' :'guest'}></User>
    <Container>
    {(count,clickEvent)=> (<ClickComponent1 count={count} clickEvent={clickEvent}/>)}
    </Container>   
     <Container>
     {(count,clickEvent)=> 
      <HoverComponent1 count={count} clickEvent={clickEvent}/>}
    </Container>       
   <ClickComponent1 namedValue="MY"/>
   <HoverComponent1/>
     <ErrorBoundary>
    <Hero heroName="vijay"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName="Ajith"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName="Shiva"></Hero>
  </ErrorBoundary>
  <ErrorBoundary>
    <Hero heroName="joker"></Hero>
    </ErrorBoundary>
    {/* <Portal/>
    <FRParent/>
   <ParentClick/>
    <Ref/>
   <Fragment/>
      <ParentComponent/>*/}
  </div>
  );
}

export default App;
