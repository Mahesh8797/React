import {BUY_ICECREAM} from './IceType'

const initialstate=
{
    numberofIcecreams:20
}

const IceReducer=(state=initialstate,action)=>
{
switch(action.type)
{
case BUY_ICECREAM:
    return {...state, numberofIcecreams:state.numberofIcecreams-action.payload};
    default :
    return state;
}
}

export default IceReducer;