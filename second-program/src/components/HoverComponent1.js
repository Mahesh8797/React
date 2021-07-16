import React, { Component } from 'react'

 class HoverComponent1 extends Component {
    render(props) {
        const {count, clickEvent} =this.props;
        return (
            <div>            
                <h1 onMouseOver={clickEvent}> Hovered {count} times</h1>
            </div>
        )
    }
}

export default HoverComponent1
