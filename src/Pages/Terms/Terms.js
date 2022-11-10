import React from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className='mb-5'>
        <h3 className='text-center mt-5 mb-5'>Terms & Conditions</h3>
        <Link className='text-decoration-none text-dark' to='/register'><p className='text-center mt-5 mb-5'>Back to Registration</p></Link>
    </div>
  )
}
