import React from 'react'
import {connect} from 'react-redux'
import { buycake, buyIce } from '../redux'
function ItemContainer(props) {
    return (
        <div>
            <h2>Item -{props.item}</h2>
            <button onClick={props.buyitem}>Click me</button>
        </div>
    )
}
const mapStateToProps=(state,ownProps)=>
{
    const itemState=ownProps.cake ? state.cake.numberofCakes : state.ice.numberofIcecreams
    return{
        item:itemState
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>
{
    const itemDispatch=ownProps.cake?
    ()=>dispatch(buycake()) : ()=>dispatch(buyIce())
    return{
        buyitem:itemDispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
