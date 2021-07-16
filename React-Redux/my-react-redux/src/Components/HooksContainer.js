import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {buycake} from '../redux'
function HooksContainer() {
    const numberofCakes = useSelector(state => state.numberofCakes)
    const dispatch = useDispatch()
    return (
        <div>
              <h1>Number of cakes -{numberofCakes}</h1>
            <button onClick={()=>dispatch(buycake())}>Buy cake</button>
        </div>
    )
}

export default HooksContainer
