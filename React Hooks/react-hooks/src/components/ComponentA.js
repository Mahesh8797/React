import React,{useContext} from 'react'
import {counterContext} from '../App'
function ComponentA() {
    const countContext = useContext(counterContext)
    return (
        <div>
        count {countContext.counstState}
        <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
