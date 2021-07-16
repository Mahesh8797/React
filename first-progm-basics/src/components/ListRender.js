import React from 'react'
import Another from './Another'
function ListRender() {
    var names=['mahe','yog','MY'];
    var persons=[
        {
            id:1,
            name:'mahe',
            age:23
        },
        {
            id:2,
            name:'aarthi',
            age:25
        }
    ]
    var mapNames=names.map((name, index)=><h2 key={index}> {index} {name}</h2>)
    var mapPersons=persons.map(person=> <Another key={person.id} person={person}></Another>)
    return (
        <div>
        {mapNames}
        {mapPersons}
        </div>
    )
}

export default ListRender
