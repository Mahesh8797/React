import {BUY_CAKE} from './CakeType'

const initialState=
{
    numberofCakes:10
}
 const CakeReducer=(state=initialState,action)=>
{

    switch(action.type)
    {
        case BUY_CAKE :
            return{
                ...state, numberofCakes:state.numberofCakes-action.payload
            }
            default :
            return state;
    }
}
export default CakeReducer