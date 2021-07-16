import React, { Component,  } from 'react'
import axios from 'axios'


class Welcome extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
            
             data:'',
             user:''
        }
    }
    
      
    retrieveAllCourses=(e)=>
     {
         const val=this.state.user;
        e.preventDefault();
        console.log("Data inserted");
         console.log(this.state);
        alert(this.state.user);
         axios.post("http://localhost:8080/MYReactSpring/", { responseType: 'text' },this.state.user)
         .then(response=>{ console.log(response.data) ;
        this.setState({ data:response.data})}
           
       );

          /* axios({
            method: 'post',
            url: 'http://localhost:8080/MYReactSpring/',
            data: val,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response.data);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });*/
          
           
    }

    changeEvent=(e)=>
    {
        this.setState({
            user: e.target.value
        })
    }
   
    render()
    {       
        return (
            <div>
            <h1>Connecting React and spring</h1>
                <button onClick={this.retrieveAllCourses}>Click me</button>
                <h1>{this.state.data}</h1>
                <link to="Child">click here</link>
               <form onSubmit={this.retrieveAllCourses}>
< input type="text" value={this.state.user} onChange={this.changeEvent} name="name"></input>
<input type="submit"></input>
        </form>
            </div>
        )
    }
}

export default Welcome1

