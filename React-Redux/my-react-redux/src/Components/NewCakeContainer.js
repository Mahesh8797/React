import React from 'react'
import {buycake} from '../redux'
import {connect} from 'react-redux'
import {useState} from 'react'
function NewCakeContainer(props) {
    const[number,setNumber]=useState(1);
    return (
        <div>
              <h1>Number of cakes -{props.numberofCakes}</h1>
              <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buycake(number)}>Buy cake</button>
        </div>
    )
}

const mapStatetoProps=state=>
{
    return{
numberofCakes: state.cake.numberofCakes
}
}
const mapDispatchtoProps=dispatch=>
{

    return{
        buycake:(number)=>dispatch(buycake(number))
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(NewCakeContainer)
