import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'MD'
        }
        this.eventBinding=this.eventBinding.bind(this);
    }
    eventBinding= ()=>
    {
        this.setState(
            {
                message: 'MY'
            }
        )
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.eventBinding.bind(this)}> Click</button>
                <button onClick={()=>this.eventBinding()}>Click</button>
                <button onClick={this.eventBinding}>Click</button>

            </div>
        )
    }
}

export default EventBind
