import React,{useState, useEffect} from 'react'
import axios from 'axios'
function FetchingData() {
    const[post, setPost]=useState({})
    const[id, setId]=useState(1)

    const[clickID, setClickId]=useState(1)
   const changeValue=()=>
    {
        setClickId(id)
    }
    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${clickID}`).then(res=>{
        setPost(res.data)
        console.log(res.data)})
    },[clickID])
    return (
        <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={changeValue}>Click</button>
          <h3>{post.title}</h3>
       { /*
           {post.map(post=><li key={post.id}>{post.title}</li>)}
       */ }
        </div>
    )
}

export default FetchingData
