import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

export default function MyReviews() {
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    const nagivate = useNavigate()
    let index = 0;
    
    const deleteComment = (val) => {
        fetch(`https://server-imazharul1101-gmailcom.vercel.app/commentdelete/${val}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            return(
                nagivate(`/myreviews/${user?.uid}`)
            )}
            )
          .catch(err => console.error(err))
      }

    return (
        <div className='m-5'>
            <h2>My Reviews</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Service Name</th>
                        <th>Comment</th>
                        <th>Purchased Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(n => {
                            return (
                                <tr key={n?._id}>
                                    <td>{index = index + 1}</td>
                                    <td>{n?.service_name}</td>
                                    <td>{n?.comment}</td>
                                    <td>{n?.date}</td>
                                    <td><button onClick={() => { deleteComment(n?._id) }}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
