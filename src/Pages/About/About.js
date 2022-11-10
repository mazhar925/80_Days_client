import React from 'react'

export default function About() {
  return (
    <div className='m-5'>
      <div className='d-flex align-items-center flex-wrap justify-content-around p-3'>
        <div className='' style={{ maxWidth: '300px', maxHeight: '520px', }}>
          <h3>About Us</h3>
          <p>We are your personal travel advocate to help you with everything from getting you on the next flight, if your flight is canceled, to searching through all of the options to find you the right vacation package, cruise, shore excursions, restaurants and more. We will provide you with tips, advice and insights that only a trained and experienced travel professional can offer. We live and love travel and welcome the opportunity to show you how we can help you travel better</p>
        </div>
        <div className='m-3' style={{ maxWidth: '400px', maxHeight: '220px', }}>
          <img src="https://www.planetware.com/wpimages/2019/09/ireland-in-pictures-most-beautiful-places-to-visit-hapenny-bridge-dublin.jpg" alt="photo" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
        </div>
      </div>
    </div>
  )
}
