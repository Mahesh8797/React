import React,{useContext} from 'react'
//import {counterContext} from '../App'
function ReducerContext() {
   // const countContext = useContext(counterContext)
    return (
        <div>
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerContext
