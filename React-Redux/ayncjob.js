const redux=require('redux')
const axios=require('axios')
const thunkMiddleware=require('redux-thunk').default

const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware

const initialState=
{
    loading:false,
    users:[],
    error:''
}

const FETCH_REQUEST='FETCH_REQUEST'
const FETCH_SUCCESS='FETCH_SUCCESS'
const FETCH_FAILURE='FETCH_FAILURE'

function fetchRequest()
{
    return{
        type:FETCH_REQUEST
    }
}
function fetchSuccess(users)
{
    return{
        type:FETCH_SUCCESS,
        payload:users
    }
}
function fetchFailure(error)
{
    return{
        type:FETCH_FAILURE,
        payload:error
    }
}

const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case FETCH_REQUEST:
            return{
                ...state,
             loading:true
            }
            
        case FETCH_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_FAILURE:
            return {
                loading:false,
                users:[],
                error:action.payload
            }
    }  
}

const fetchData=()=>
{
    return function(dispatch)
    {
    dispatch(fetchRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>
        {
            const users=response.data.map(users=>users.name)
            dispatch(fetchSuccess(users))
        })
        .catch(error=>
            {
            dispatch(fetchFailure(error.message))
            }
        )
}}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchData())