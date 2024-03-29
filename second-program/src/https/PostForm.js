import React, { Component } from 'react'
import axios from 'axios'
 class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userId:'',
              title:'',
              body:''
         }
     }
     changeEvent=(e)=>
     {
         this.setState({
             [e.target.name]: e.target.value
         })
     }
     submitEvent=(e)=>
     {
         e.preventDefault()
         console.log("Data inserted");
         console.log(this.state)
         axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
         .then(response=>{console.log(response)})
         .catch(error=>{console.log(error)})

     }
    render() {
        const{userId,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitEvent}>
                <input type="text" name="userId" value={userId} onChange={this.changeEvent}/>
                <br/>
                <input type="text" name="title" value={title} onChange={this.changeEvent}/>
                <br/>
                <input type="text" name="body" value={body} onChange={this.changeEvent}/>
                <br/>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
