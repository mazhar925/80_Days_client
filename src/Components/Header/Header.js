import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';



export default function Header() {
  const navigate = useNavigate()
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/')
      })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <Link className='fs-2 text-light fw-bolder text-decoration-none' to='/'>80 Days</Link>
          </Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link><Link className='fw-semibold text-light text-decoration-none' to='/'>Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link className='fw-semibold text-light text-decoration-none' to='/services'>Services</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link className='fw-semibold text-light text-decoration-none' to='/about'>About</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link className='fw-semibold text-light text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
            </Nav.Item>
            {
              user ? <>
                <Nav.Item>
                  <Nav.Link><Link className='fw-semibold text-light text-decoration-none' to='/profile'>Profile</Link></Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link><Link className='fw-semibold text-light text-decoration-none' to={`/myreviews/${user?.uid}`}>My Reviews</Link></Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link><Link className='fw-semibold text-light text-decoration-none' to={`/myservices/${user?.uid}`}>My Services</Link></Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className='fw-semibold text-light text-decoration-none' onClick={handleLogOut}>LogOut</Nav.Link></Nav.Item>
              </> : <Nav.Item><Nav.Link><Link className='fw-semibold text-light text-decoration-none' to='/login'>Login</Link></Nav.Link></Nav.Item>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
