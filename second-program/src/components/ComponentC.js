import React, { Component } from 'react'
import { UserConsumer } from './UserComponent'

 class ComponentC extends Component {
    render() {
        return (
            <div>
            <UserConsumer>
            { (name)=><h1>Hello {name}</h1>}
               </UserConsumer>
            </div>
        )
    }
}

export default ComponentC
