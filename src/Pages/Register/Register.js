import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

export default function Register() {
  const [accept, setAccept] = useState(false)
  const [err, setErr] = useState('')
  const navigate = useNavigate()
    const {createUser, updateUserProfile, providerLogin} = useContext(AuthContext)
    const handleRegister = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            setErr('')
            updatePro(name, photo)
            navigate('/courses')
        })
        .catch(error => setErr(error.message))
    }
    const updatePro =(name, photo)=>{
      const profile = {
          displayName: name,
          photoURL: photo
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error => console.error(error))
  }
    const acceptedHandle = event =>{
      const val = event.target.checked;
      setAccept(val)
  }

  const provider = new GoogleAuthProvider();

  const handleGoogle = ()=>{
      providerLogin(provider)
      .then(result => {const user = result.user
        navigate('/courses')})
      .catch(error => setErr(error))
  }

    const style = {
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      padding: '20px',
      borderRadius: '10px',
      marginTop: '70px',
      marginBottom: '70px'
    }
    const cardContainer = {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto'
    }
    const logo = {
        width: '50px',
        height: '50px',
      }

    return (
        <div style={cardContainer}>
          <Form onSubmit={handleRegister} style={style} className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo Url" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={acceptedHandle}  type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accept}>
                Register
            </Button>
            <p className='text-danger'>{err}</p>
            <p className='fw-bold text-center'>Or</p>
            <div className='d-flex justify-content-evenly'>
            <button style={logo} onClick={handleGoogle}>
              <FaGoogle></FaGoogle>
            </button>
            </div>
            <Form.Text className="text-dark">
              <p className='mt-4 text-center'><Link className='text-dark text-decoration-none' to='/login'>Already have a account</Link></p>
            </Form.Text>
        </Form>
        </div>
    )
}
