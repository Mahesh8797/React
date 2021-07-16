import {createStore,applyMiddleware} from 'redux'
import RootReducer from './RootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const Store=createStore(RootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default Store