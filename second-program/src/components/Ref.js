import React, { Component } from 'react'

 class Ref extends Component {
     constructor(props) {
         super(props)
     
         this.inputRef=React.createRef()
         this.cbref=null;
         this.setcbRef=(element)=>
         {
             this.cbref=element
         }
     }
     componentDidMount()
     {
         if(this.cbref)
         {
             this.cbref.focus()
         }
         this.inputRef.current.focus()
         console.log(this.inputRef)
     }

     clickHandler=()=>
     {
         alert( `${this.inputRef.current.value} `)
     }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/><br/><br/>
                <input type="text" ref={this.cbref}/><br/><br/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Ref
