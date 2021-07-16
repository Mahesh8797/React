import React,{Component} from 'react';

//var Sample= (props)=>   <h1>I am a function {props.name} </h1>

export class Sample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'click here to view it'
        }
    }
    show()
    {
        this.setState({
            message: <i>
            <b>
            Hello mahe
            </b></i>
        },()=>{console.log(this.state.message)})
    }
    render() {
        return (
            <div>
                <button onClick={()=> this.show()}>{this.state.message}</button>
            </div>
        )
    }
}

export default Sample

