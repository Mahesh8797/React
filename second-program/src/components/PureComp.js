import React, { PureComponent } from 'react'
import RegComp from './RegComp'
 class PureComp extends PureComponent {
     
    render(props) {
        console.log("Pure component")
        return (
            <div>
               <h1>Pure Component {this.props.name}</h1> 
               
            </div>
        )
    }
}

export default PureComp
