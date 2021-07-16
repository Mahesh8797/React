import React,{useState} from 'react'

function HookCounter3() {

    const[items, setItem]=useState([]);


    const addValue=()=>
    {

        setItem([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
    }
    return (
        <div>
        <button onClick={addValue}> Click to add </button>
            <ul>
            Items {items.map(items=>(<li key={items.id}>{items.value}</li>))}
            </ul>
        </div>
    )
}

export default HookCounter3
