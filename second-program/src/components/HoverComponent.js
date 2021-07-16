import React, { Component } from 'react'
import withCounter from './withCounter'
 class HoverComponent extends Component {
          
    render(props) {
        const {count, increment} =this.props;
        return (
            <div>            
                <h1 onMouseOver={increment}>{this.props.name} Hovered {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverComponent,10)
