const redux=require('redux')
const logger=require('redux-logger')

const creStore=redux.createStore
const combineReduc=redux.combineReducers
const reduxlogger=logger.createLogger()
const applyMidd=redux.applyMiddleware

const buy_cake='buy_cake';
const buy_ice='buy_ice'

function buycake()
{
    return{
type: buy_cake,
info:'cake owner'
}
}

function buyice()
{
    return{
type: buy_ice,
info:'ice owner'
}
}


const initialcakeState=
{
    numberofCakes:10
}

const initialiceState=
{
    numberofIce:20
}

const Cakereducer=(state=initialcakeState,action)=>
{

    switch(action.type)
    {
        case buy_cake:
            return{...state,numberofCakes:state.numberofCakes-1}
    
    default: return state
    }
}

const Icereducer=(state=initialiceState,action)=>
{

    switch(action.type)
    {
        case buy_ice:
            return{...state,numberofIce:state.numberofIce-1}
    
    default: return state
    }
}
const finalReducer=combineReduc({
    cake: Cakereducer,
    ice:Icereducer
})
const store=creStore(finalReducer, applyMidd(reduxlogger))
console.log('initial state',store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyice())
store.dispatch(buyice())
unsubscribe()