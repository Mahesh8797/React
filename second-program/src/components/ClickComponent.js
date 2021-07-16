import React, { Component } from 'react'
import withCounter from './withCounter'
 class ClickComponent extends Component {
     
    render(props) {
        const {count, increment} =this.props;
        return (
            <div>
                <button onClick={increment}>{this.props.name} {this.props.namedValue} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickComponent,5)
