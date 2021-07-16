import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle'

 class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hi Lifecycle'
             
        }
        console.log("Lifecycle A constructor")
    }
static getDerivedStateFromProps(props, state)
{
    console.log("Lifecycle A getDerivedStateFromProps")
    return null
}

componentDidMount()
{
    console.log("Lifecycle A componentDidMount")
}
    render() {
        console.log("Lifecycle A render method");     
        return (
            <div>
                Hello
               <ChildLifeCycle></ChildLifeCycle>
            </div>
             )                 
    } 
}

export default LifeCycleA
