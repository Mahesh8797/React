import React, { Component } from 'react'
import './Styles.css'
 class Forms extends Component {
     
     constructor(props) {
         super(props)
     
         this.state = {
              fname:'',
              lname:'',
              value: 'hello',
              count:0,
              date: new Date().toLocaleString()
         }
     }
    
     handleClick=(event)=>
     {
         this.setState({
            [event.target.name]:event.target.value
         })
     }
     submitEvent =(event)=>
     {
        if(this.state.fname==="mahe" || this.state.fname==="yoge" || this.state.fname==="MY")
        {
        alert(`Welcome ${this.state.fname} ${this.state.lname}`)
        this.setState({
            count: this.state.count+1,
            date: new Date().toLocaleString()
        })
        }
        else
        {
        alert("Sorry! incorrect name")
        }     
        event.preventDefault()
     }
     
     
    componentDidMount()
    {
      setInterval(()=>{
          this.setState({ 
              value: `hello ${this.state.fname}`,
              
            })  
    }  
        ,200)
             
}

    render(props) {
        return (
            <div className="FormStyle">
            <h1>{this.state.value}</h1>
                <form onSubmit={this.submitEvent}>
                <label>Username : </label>
                <input type="text" name="fname" value={this.state.fname} onChange={e=>this.handleClick(e)}></input>
                <br/><br/>
                <label>LastName : </label>
                <input type="text" name="lname" value={this.state.lname} onChange={this.handleClick}></input>
                <br/><br/>
                <button >Click here</button>
                </form>
                <h1>count of correct  submits {this.state.count}</h1>
                <h1>{this.state.date}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Forms
