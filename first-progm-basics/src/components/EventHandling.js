import React,{Component} from 'react'

/*function EventHandling() {

   function handleClick()
    {
       console.log("button clicked");      
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}*/


 class EventHandling extends Component {
     handleClick()
    {
       console.log("button clicked");      
    }
    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default EventHandling


