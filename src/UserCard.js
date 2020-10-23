import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const UserCard = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className=''>
  <ListGroup variant="flush">
    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
    <ListGroup.Item>Username: {user.username}</ListGroup.Item>
    <ListGroup.Item>email: {user.email}</ListGroup.Item>
    {/* <ListGroup.Item>autre: {user.address.geo.lat}</ListGroup.Item> */}
  </ListGroup>
</Card>
        </div>
    )
}

export default UserCard
