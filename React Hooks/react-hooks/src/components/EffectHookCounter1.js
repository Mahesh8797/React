import React,{useState,useEffect} from 'react'

function EffectHookCounter1() {

    const[count,setCount]=useState(0);

    useEffect ( ()=>{
        document.title=`Clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=>setCount(prevState=>prevState+1)}>Click {count} times</button>
        </div>
    )
}

export default EffectHookCounter1
