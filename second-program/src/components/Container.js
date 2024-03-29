import React, { Component } from 'react'

 class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         count:0 
        }
    }
    clickEvent=()=>
    {
        this.setState(prevSate=>{
            return {count: prevSate.count+1}
        })
    }
    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.clickEvent)}
            </div>
        )
    }
}

export default Container
