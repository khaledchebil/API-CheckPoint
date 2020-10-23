import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import axios from 'axios'

const User = ({match}) => {
const [user, setUser] = useState()

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users/?id='+match.params.id;
        fetch(url)
        .then(res => res.json())
        .then(res => setUser(res[0]))
        .catch(err => { })
   
      },[match.params.id])
      console.log(user)

    return (
        <div>
            
            <h1>the full informaiton </h1>
            <h3>Name</h3>
            <h3>Username</h3>
            <h3>Adress</h3>
            {/* <h1> {user.name}</h1> */}
            
            <Link to='/users'><Button variant="primary">Back</Button></Link>
        </div>
    )
}

export default User
