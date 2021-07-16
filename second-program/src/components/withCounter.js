import React from 'react'

const withCounter= (OriginalComponent, inc)=>
{
    class NewComponent extends React.Component
    {
        constructor(props) {
            super(props)
        
            this.state = {
             count:0    
            }
        }
        clickEvent=()=>
        {
            this.setState({
                count:this.state.count+inc
            })
        }
        render()
        {
            return <OriginalComponent name='mahe' 
            count={this.state.count}
             increment={this.clickEvent}
             {...this.props}>
             </OriginalComponent>
        }
        
    }
    return NewComponent
}

export default withCounter