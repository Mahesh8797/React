import React from 'react'
import {useState} from 'react'
function HookCounter1() {

    const initialCount=0;
    const[count, setCount]=useState(initialCount);

   const incrementByfive=()=>
    {

        for(var i=0;i<5;i++)
        {
setCount(prevCount=>prevCount+1);
        }
    }
    return (
        <div>
        <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            Count:{count}
            <button onClick={()=>setCount(count-1)}>Decrement</button>

            <button onClick={incrementByfive}>Increment by 5</button>
        </div>
    )
}

export default HookCounter1
