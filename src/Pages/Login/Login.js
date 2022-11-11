import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider'
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const [err, setErr] = useState('')
    const {signIn, providerLogin} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()
    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true})
            form.reset()
            setErr('')
            fetch('https://server-imazharul1101-gmailcom.vercel.app/jwt', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
              .then(res => res.json())
              .then(data => {
                  localStorage.setItem('80days-token', data.token);
                  navigate(from, { replace: true });
              });
        })
        .catch(error => setErr(error.message))
    }

    const provider = new GoogleAuthProvider();

    const handleGoogle = ()=>{
        providerLogin(provider)
        .then(result => {const user = result.user
          fetch('https://server-imazharul1101-gmailcom.vercel.app/jwt', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
              .then(res => res.json())
              .then(data => {
                  localStorage.setItem('80days-token', data.token);
                  navigate(from, { replace: true });
              });
          navigate(from, {replace: true})
        })
        .catch(error => setErr(error.message))
    }


    const style = {
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      padding: '25px',
      borderRadius: '10px'
    }
    const cardContainer = {
      width: '100vw',
      height: '100vh',
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
          <Form onSubmit={handleLogin} style={style} className='form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            <p className='text-danger'>{err}</p>
            <p className='fw-bold text-center'>Or</p>
            <div className='d-flex justify-content-evenly'>
            <button style={logo} onClick={handleGoogle}>
              <FaGoogle></FaGoogle>
            </button>
            </div>
            <Form.Text className="text-dark">
              <p className='mt-4 text-center'><Link className='text-dark text-decoration-none' to='/register'>Create New Account</Link></p>
            </Form.Text>
        </Form>
        </div>
    )
}
