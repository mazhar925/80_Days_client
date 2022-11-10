import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Services() {
  const data = useLoaderData()
  return (
    <div className='d-flex justify-content-center align-items-center flex-column m-5'>
      <h4>Services</h4>
      <div className='d-flex flex-wrap justify-content-evenly'>
        {
          data.map(n =>
            <Card style={{ maxWidth: '18rem' }} className='m-2'>
              <Card.Img variant="top" src={n.img} style={{ width: '100%', height: '12rem' }} />
              <Card.Body>
                <Card.Title>{n.name}</Card.Title>
                <Card.Text>
                  {n.description.slice(0, 100)+ '...' }
                </Card.Text>
                <Card.Text>
                  Price: ${n.price}
                </Card.Text>
                <Link className='text-decoration-none text-dark' to={`/services/${n._id}`}><Button variant="primary">Details</Button></Link>
              </Card.Body>
            </Card>
          )
        }
      </div>
    </div>
  )
}
