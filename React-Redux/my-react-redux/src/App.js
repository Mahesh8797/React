import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import Store from './redux/Store'
import CakeContainer from './Components/CakeContainer'
import HooksContainer from './Components/HooksContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import NewCakeContainer from './Components/NewCakeContainer'
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer'
function App() {
  return (
    <Provider store={Store}>
    <div className="App">   
    {/*<ItemContainer cake/>
    <ItemContainer/>
      <CakeContainer />   
      <HooksContainer /> 
      <IceCreamContainer/>
      <UserContainer/>*/}
      <UserContainer/>
      
    </div>
    </Provider>
    
  );
}

export default App;
