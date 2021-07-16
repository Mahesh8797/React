import Axios from 'axios'
import {FETCH_USER,FETCH_SUCCESS,FETCH_FAILURE} from './UserType'
import axios from 'axios'
export const fetchUser=()=>
{
return{
    type:FETCH_USER,
    loading:true
}
}

export const fetchSuccess=(user)=>
{
    return{
        type:FETCH_SUCCESS,
        payload:user
    }
}

export const fetchFailre=(error)=>
{
    return{
        type:FETCH_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>
{
    return (dispatch)=>
    {
        dispatch(fetchUser);
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response=>
            {
            const users=response.data
            dispatch(fetchSuccess(users))
            }
        ).catch(
            errors=>
            {
                const error=errors.message
                dispatch(fetchFailre(error))
            
            }
        )
    }
}