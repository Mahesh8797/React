import React from 'react';

const First=(props)=>    
{ return(
    <div>
    <h1> Hello {props.name} Initial {props.initial}</h1>
{props.children}
</div>
)
}
export default First