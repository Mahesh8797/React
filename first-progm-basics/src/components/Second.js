import React,{Component} from 'react';

class Second extends Component{

    render(props)
    {
        return <h1> MD is changed to MY but the name {this.props.name} will not be changed</h1>
    }
}

export default Second;
