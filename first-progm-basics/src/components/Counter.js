import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
   /*} increment()
    {
        this.setState({  
            count: this.state.count+1
        }, ()=> {console.log('callback function',this.state.count)});
        console.log(this.state.count);
    }*/
    increment()
    {
        this.setState(prevState=>(
        {
           count : prevState.count+1
        }),()=>{console.log(this.state.count);})
        
    }

    incrementThree()
    {
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1> Count - {this.state.count}</h1>
                <button onClick={()=> this.incrementThree()}>add</button>
            </div>
        )
    }
}

export default Counter;
