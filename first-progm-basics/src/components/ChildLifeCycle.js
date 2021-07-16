import React, { Component } from 'react'

 class ChildLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hi childcylce'
             
        }
        console.log("Lifecycle B constructor")
    }
static getDerivedStateFromProps(props, state)
{
    console.log("Lifecycle B getDerivedStateFromProps")
    return null
}

componentDidMount()
{
    console.log("Lifecycle B componentDidMount")
}
    render() {
        console.log("Lifecycle B render method");     
        return (
            <div>
                Hello
            </div>
             )                 
    } 
}


export default ChildLifeCycle
