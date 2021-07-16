import React,{useEffect,useReducer} from 'react'
import axios from 'axios'
const initialState=
{
    loading:true,
    post:'',
    error:''
}
const reducer=(state, action)=>
{
    switch(action.type)
    {
        case 'Success':
            return {loading:false,post:action.payload,error:''}
        case 'Failure':
            return {loading:false,post:'',error:'something wrong'}
    }
}
function FetchDataReducer()
 {

   const[state,dispatch] =useReducer(reducer,initialState)
   useEffect( ()=>
   {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>{dispatch({type:'Success', payload:response.data})  
   })       
    .catch(response=>
        { dispatch({type:'Failure'})  })
    },[])
    return(
        <div>
        {state.loading ? 'loading': state.post.title}
        {state.error ?state.error :null}
        </div>
    )
}

export default FetchDataReducer;
