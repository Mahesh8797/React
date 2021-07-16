import React from 'react'
import {Username,Password} from '../App'
function ContextAPI() {
    return (
        <div>
            <Username.Consumer>
            {
                userval=>{ return (
                    <Password.Consumer>
                    {
                        passval=>{return (                    
                    <h1>user name {userval} password {passval}</h1>)}}                    
                    </Password.Consumer>
                )}}            
            </Username.Consumer>
        </div>
    )
}

export default ContextAPI
