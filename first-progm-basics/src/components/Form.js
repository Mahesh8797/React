import React, { Component } from 'react'

 class Form extends Component {
    constructor(props)
    {
       super(props)
   
       this.state = {
            message:'',
            password:''
       }
   }
   changeValue=(event)=>
   {
       this.setState({
           message:event.target.value
       })
   }
   changePassword=(event)=>
   {
       this.setState({
        password:event.target.value
       })
   }
   submitEvent=(event)=>
   {
       alert(` Hello The user name is : ${this.state.message} The password is : ${this.state.password}`)
       event.preventDefault();
   }
    render() {
        return (
            <div>
               <form onSubmit={this.submitEvent} >
               <h1>Form Component</h1>
               <label>UserName : </label>
               <input type="text" value={this.state.message} onChange={this.changeValue}/>
               <br/><br/>
               <label>Password : </label>
               <input type="password" value={this.state.password } onChange={this.changePassword}/>
               <br/><br/>
               <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}

export default Form
