import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'
import {useEffect} from 'react'
function UserContainer({userData,fetchUsers}) {

    useEffect(()=>
    {     
            fetchUsers()       
    },[])
    return userData.loading? (<h2>Loading</h2>): userData.error?(<h2>{userData.error}</h2>):(
        <div>
            <h2>UserList</h2>
            <h3>{userData.user.map(user=><h1>{user.name}</h1>)}</h3>
        </div>
    )
}
const mapStateToProps=(state)=>
{
return{
    userData: state.user
}
}
const mapDispatchToProps=(dispatch)=>
{
return{
    fetchUsers :()=>
    {
        dispatch(fetchUsers())
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
