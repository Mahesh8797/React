import React, { Component } from 'react'

 class ClickComponent1 extends Component {
    render(props) {
        const {count, clickEvent} =this.props;
        return (
            <div>
                <button onClick={clickEvent}>  Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickComponent1
