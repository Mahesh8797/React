import React, { Component } from 'react'
import Input from './Input'
 class ParentClick extends Component {

    constructor(props) {
        super(props)
    
       this.classRef=React.createRef()
    }
    handler=()=>
    {
        this.classRef.current.focusInput();
    }
    render() {
        return (
            <div>
                <Input ref={this.classRef}></Input>
                <button onClick={this.handler}>Click</button>
            </div>
        )
    }
}

export default ParentClick
