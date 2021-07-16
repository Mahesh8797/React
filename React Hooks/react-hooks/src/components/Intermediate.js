import React ,{useContext} from 'react'
import ContextAPI from './ContextAPI'
import {Username,Password} from '../App'
function Intermediate() {

    const user=useContext(Username);
    const pass=useContext(Password)
    return (
        <div>
            {user} - {pass}
        </div>
    )
}

export default Intermediate
