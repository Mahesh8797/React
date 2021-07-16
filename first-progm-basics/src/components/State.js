import React,{Component} from 'react';

class State extends Component{

    constructor()
    {
        super();
        this.state={
            message: "Welcome Mahe"
        }
    }
    change()
    {
        this.setState(
        {
            message:"Thanks for click MY"
        })
    }
    render()
    {
        return (
            <div>
            <h1> {this.state.message} </h1>
            <button onClick= {()=> this.change()} > click</button>
            </div>
        )
    }
}

export default State;
