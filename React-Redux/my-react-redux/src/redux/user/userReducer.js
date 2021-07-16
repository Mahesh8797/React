
import {FETCH_USER,FETCH_SUCCESS,FETCH_FAILURE} from './UserType'
const initialState=
{
loading:false,
user:[],
error:''
}

const userReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
    case FETCH_USER:
    return {...state,loading:true}
    case FETCH_SUCCESS:
        return{
            loading:false,
            user:action.payload,
            error:''
        }
    case FETCH_FAILURE:
        return{
            loading:false,
            user:[],
            error:action.payload
        }
        default: return state

    }
}

export default userReducer;