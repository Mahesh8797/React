import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import Memo from './Memo'
 class ParentComponent extends Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             name:5
        }
    }
    
    componentDidMount()
    {
       setInterval(()=>
       {
           this.setState({
        name:6})
          }   
        ,2000)}

    render() {
        console.log("****Parent component******")
        return (
            
            <div>
                <h1>Parent Component {this.state.name} </h1>
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>  
                <Memo name={this.state.name}></Memo>           
            </div>
        )
    }
}

export default ParentComponent
