import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>
{
    switch(action)
    {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
    }
}

function ReducerHook1() {
    const[count,callAction]=useReducer(reducer,initialState)
    return (
        <div>
        <h1>Count {count}</h1>
            <button onClick={()=>callAction('increment')}>Increment</button>
            <button onClick={()=>callAction('decrement')}>Decrement</button>
            <button onClick={()=>callAction('reset')}>Reset</button>
        </div>
    )
}

export default ReducerHook1
