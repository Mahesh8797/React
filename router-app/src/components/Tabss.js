

import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import About from './About'
export class Tabss extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
            tabIndex: 0 
        };
    }
    
    render() {
        const tabss=( 
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}> 
        <TabList>
          <Tab enabled>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanel><About name="mahe"/></TabPanel>
        <TabPanel>text for 2</TabPanel>
        </Tabs>);
        return (
            <div>
            {tabss}
           
            </div>
        )
    }
}

export default Tabss

