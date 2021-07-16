import React,{useState} from 'react'

function HookCounter2() {

    const[name,setName]=useState({firstname:'',lastname:''})
    return (
        <div>
            <input type="text" name={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}></input>
            <input type="text" name={name.lastname} onChange={e=>setName({...name, lastname:e.target.value})}></input>

            <h2>FirstName is :{name.firstname}</h2>
            <h2>LastName is :{name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounter2
