import React from 'react'
function Child(props) {
    return (
        <div>
            <button onClick={()=>props.eventHandle("child")}>Click</button>
        </div>
    )
}
export default Child
