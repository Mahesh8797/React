import React from 'react'
import {buycake} from '../redux'
import {connect} from 'react-redux'
function CakeContainer(props) {
    return (
        <div>
              <h1>Number of cakes -{props.numberofCakes}</h1>
            <button onClick={props.buycake}>Buy cake</button>
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
        buycake:()=>dispatch(buycake())
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(CakeContainer)
