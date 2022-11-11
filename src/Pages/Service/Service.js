import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Context/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Service() {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { user } = useContext(AuthContext)
  const [show, setShow] = useState(false);
  const [inputValue, setValue] = useState('')
  const [commentValue, setComment] = useState('')
  const [commentArray, setArrayCom] = useState([])
console.log(data)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const valueChecker = (e) => {
    setValue(e.target.value)
  }
  const purchaseFun = () => {
    const purchaseData = {
      user_id: user?.uid,
      service_id: data[0]._id,
      service_name: data[0].name,
      date: new Date()
    }
    fetch('https://server-imazharul1101-gmailcom.vercel.app/servicesadd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(purchaseData)
    })
      .then(res => res.json())
      .then(data => {
        setValue('')
        navigate(`/myservices/${user?.uid}`)
      })
      .catch(err => console.error(err))
  }

  const commentData = () => {
    const commentIn = {
      service_id: data[0]._id,
      service_name: data[0].name,
      user_id: user.uid,
      user_email: user.email,
      user_photo: user.photoURL,
      user_name: user.displayName,
      comment: commentValue,
      date: new Date()
    }
    fetch('https://server-imazharul1101-gmailcom.vercel.app/commentadd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(commentIn)
    })
      .then(res => res.json())
      .then(data => {
        setComment('')
        navigate(`/services/${data[0]._id}`)
      })
      .catch(err => console.error(err))

  }

  useEffect(() => {
    fetch(`https://server-imazharul1101-gmailcom.vercel.app/${data[0]?._id}`)
      .then(res => res.json())
      .then(data => {
        setArrayCom(data)
      })
      .catch(err => console.error(err))
  }, [])
  console.log(commentArray)

  return (
    <div className='m-5'>
      <h2>{data[0]?.name}</h2>
      <PhotoProvider>
        <PhotoView src={data[0]?.img}>
          <img src={data[0]?.img} style={{ maxWidth: '300px' }} alt={data[0]?.name} className='my-3' />
        </PhotoView>
      </PhotoProvider>
      <p>{data[0]?.description}</p>
      <p>Price: ${data[0]?.price}</p>
      <div>
        <Link to='/services'><button>Back</button></Link>
        <button className='ms-3' onClick={user? handleShow: ()=>{navigate('/login')}}>Get the Service</button>
      </div>
      <div className='mt-3'>
        {
          user ? <div className='d-flex flex-column' style={{ width: '250px' }}><textarea style={{ resize: 'none' }} value={commentValue} onChange={(e) => { setComment(e.target.value) }}></textarea><button className='mt-3' onClick={commentData}>Comment</button></div> : ''
        }
        <div className='mt-3'>
          {/* {
          commentArray?.map(n => {
            <div>
              <p>{n.comment}</p>
              <div>
                <p>{n.user.user_name}</p>
                <img src={n.user.user_photo} alt={n.user.user_name} />
                <p>{n.user.date}</p>
              </div>
            </div>
          })
        } */}
        </div>
      </div>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Write the amount to purchase</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`$${data[0].price}`}
                  name='amount'
                  value={inputValue}
                  onChange={(e) => { valueChecker(e) }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" disabled={inputValue === data[0].price ? false : true} onClick={purchaseFun}>
              Pay
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}
