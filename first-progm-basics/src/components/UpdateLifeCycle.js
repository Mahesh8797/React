import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle'

 class UpdateLifeCycle extends Component {
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

shouldComponentUpdate()
{
    console.log("shouldComponentUpdate is called")
    return true;
}

getSnapshotBeforeUpdate(props, state)
{
    console.log("getSnapshotBeforeUpdate is called")
    return null;
}

componentDidUpdate(props,state,snap)
{
    console.log("componentDidUpdate is called")
}

componentDidMount()
{
    console.log("Lifecycle A componentDidMount")
}
changeEvent=()=>
{
    this.setState({
        message:'hi'
    })
}
    render() {
        console.log("Lifecycle A render method");     
        return (
            <div>
                Hello
               <ChildLifeCycle></ChildLifeCycle>
               <button onClick={this.changeEvent}>Change state</button>
            </div>
             )                 
    } 
}

export default UpdateLifeCycle
