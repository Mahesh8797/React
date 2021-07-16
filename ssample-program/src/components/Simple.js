import React from 'react'
import Child from './Child'
function Simple() {
    const list=[
        {
            id:1,
            name:"mahe",
            initial: 'Y',
            age:23
        },
        {
            id:2,
            name:"aarthi",
            initial: 'D',
            age:22
        },
        {
            id:3,
            name:"Yoge",
            initial: 'K',
            age:33
        }       
    ]
     const names=list.map((list)=><Child key={list.id} name={list.name} initial={list.initial} age={list.age}></Child>)
    return (       
        <div>
       {names}
       
        </div>
    )
}

export default Simple
