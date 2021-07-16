import React from 'react'
import {buyIce} from '../redux'
import {connect} from 'react-redux'
function IceCreamContainer(props) {
    return (
        <div>
              <h1>Number of cakes -{props.numberofIcecreams}</h1>
            <button onClick={props.buyIce}>Buy cake</button>
        </div>
    )
}

const mapStatetoProps=state=>
{
    return{
        numberofIcecreams: state.ice.numberofIcecreams
}
}
const mapDispatchtoProps=dispatch=>
{

    return{
        buyIce:()=>dispatch(buyIce())
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(IceCreamContainer)
