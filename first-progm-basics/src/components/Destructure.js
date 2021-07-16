import React,{Component} from 'react'

const Destructure=(props)=>
{
const {fname,lname}=props;
return(
    <div>
<h1>MY is constant anytime {fname} {lname}</h1>
</div>
)
}
export default Destructure;