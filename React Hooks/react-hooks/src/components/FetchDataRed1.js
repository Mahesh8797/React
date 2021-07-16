import React,{useState,useEffect} from 'react'
import axios from 'axios'
function FetchDataRed1() {
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const[post,setPost]=useState('')

    useEffect( ()=>
    {
        axios.get('https://jsonplacehoder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(response=>
            {
                setLoading(false)
                setError('something went wrong');
            })
    })
    return (

        <div>
            {loading ? 'loading': post.title}
            {error ?error :null}
        </div>
    )
}

export default FetchDataRed1
