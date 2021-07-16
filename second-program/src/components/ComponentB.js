import React, { Component } from 'react'
import ComponentC from './ComponentC'
import {UserContext} from './UserComponent'
 class ComponentB extends Component {
     static contextType=UserContext
    render() {
        return (
            <div>
            <h1>{this.context}</h1>
                <ComponentC></ComponentC>
            </div>
        )
    }
}

export default ComponentB
