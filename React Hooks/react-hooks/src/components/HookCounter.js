import React,{useState} from 'react'

function HookCounter() {
    const[count, incrementCount]=useState(0);
    return (
        <div>
            <button onClick={()=>incrementCount(count+1)}>click me {count}</button>
        </div>
    )
}

export default HookCounter
