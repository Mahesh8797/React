import React, { Component } from 'react'
import axios from 'axios'
 class Posts extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[],
              errorMessage:''
         }
     }
     componentDidMount()
     {
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then((response)=>{
this.setState({ posts: response.data })
         })
         .catch(error=>
            {
                console.log(error)
                this.setState({errorMessage : `incorrect url not able to find ${error}`})
            })
        
     }
    render() {
        const {posts,errorMessage}=this.state
        return (
            <div>
                List of posts
               { posts.length?
            posts.map((posts)=><h1 key={posts.id}>{posts.body}</h1>):null}
            { errorMessage ? <div> {errorMessage}</div>  : null}
        
            </div>
        )
    }
}

export default Posts

