import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

export default function Profile() {
    const { user } = useContext(AuthContext)

    return (
        <div className='m-5'>
            <h2 className='mb-3'>Profile</h2>
            <h2>Name: {user?.displayName}</h2>
            <img src={user?.photoURL} alt={user?.displayName} style={{borderRadius: '10px'}} />
            <p>Email: {user?.email}</p>
            <div>
                <Link to={`/myservices/${user?.uid}`}><button>My Services</button></Link>
                <Link to={`/myreviews`}><button className='ms-3'>My Reviews</button></Link>
            </div>
        </div>
    )
}
