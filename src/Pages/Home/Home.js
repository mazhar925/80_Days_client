import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useLoaderData } from 'react-router-dom'
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import Booking from '../../Components/Booking/Booking';

export default function Home() {
  const data = useLoaderData()
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className='d-flex justify-content-center align-items-center m-3'>
        <Banner></Banner>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-column p-3'>
        <h4>Services</h4>
        <ListGroup horizontal>
          {
            data.map(n => <ListGroup.Item><Link className='text-decoration-none text-dark' to={`/services/${n._id}`}>{n.name}</Link></ListGroup.Item>)
          }
          <ListGroup.Item><Link className='text-decoration-none text-dark' to='/services' >See All</Link></ListGroup.Item>
        </ListGroup>
      </div>
      <div className='my-5'>
        <About></About>
      </div>
      <div className='my-5'>
        <Booking></Booking>
      </div>
    </div>
  )
}
