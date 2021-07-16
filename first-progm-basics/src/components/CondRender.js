import React, { Component } from 'react'

class CondRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isEntered:true
        }
    }
    
    render() {   

        //if else statement
            if(this.state.isEntered)
            return <div>  Welcome mahe </div>
             else return <div> Welcome MY</div>
         
             //elements variables operator
             let message
          if(this.state.isEntered)
          message= <div>  Welcome mahe </div>
           else 
           message= <div> Welcome MY</div>  
        
        return <div> {message}</div>

        //ternary operator
        return  this.state.isEntered ? <div> Welcome mahe </div> :<div> Welcome MY</div>

        //short circuit operator
        return this.state.isEntered && <div> Welcome mahe </div>

     
        
    }
}

export default CondRender

