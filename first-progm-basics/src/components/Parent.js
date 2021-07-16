import React, { Component } from 'react'
import Child from './Child'
 class Parent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message : "parent"
         }
         this.callingMethod=this.callingMethod.bind(this);
     }
     
     callingMethod(child)
     {
            alert(`Hello ${this.state.message} from ${child}`);
            console.log("event called");
     }
    render() {
        return (
            <div>
                <Child eventHandle={this.callingMethod}></Child>
            </div>
        )
    }
}

export default Parent
