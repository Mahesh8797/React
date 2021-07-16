import React from 'react'
import useCounter from './useCounter'
function CounterTwo() {
    const[count,increment,decrement,reset] = useCounter(5)
    return (
        <div>
        count: {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
