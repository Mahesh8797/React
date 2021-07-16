import React from 'react'

function Child(props) {
    return (
        <div>
            <h1>{props.name} {props.initial} {props.age}</h1>
        </div>
    )
}

export default Child
