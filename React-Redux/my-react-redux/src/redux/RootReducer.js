import cakeReducer from './cake/CakeReducer'
import IceReducer from './icecream/IceReducer'
import userReducer from './user/userReducer'
import {combineReducers} from 'redux'

const RootReducer=

    combineReducers({
        cake:cakeReducer,
        ice:IceReducer,
        user:userReducer
    })


export default RootReducer;