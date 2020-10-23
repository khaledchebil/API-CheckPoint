import React , { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

const UserList = () => {

const [listOfUser, setListOfUser] = useState([])

useEffect(() => {

  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => res.data)
  .then(res => setListOfUser(res) )
  .catch(err => { })
    
},[])
    
    return (
        <div className=''>
            <ul className='tc bg-light-blue '>
    {
    listOfUser.map(user => 
    <div key={user.id} className='pa3 ma2 thespan br3 grow dib '>
    <Link className='ok' to={`users/user/${user.id}`} >
  <UserCard user={user}/>
  </Link>
      </div>
      )
      }
            </ul>
      
        </div>
    )
}

export default UserList
