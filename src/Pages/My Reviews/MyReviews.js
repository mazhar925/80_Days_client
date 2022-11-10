import React from 'react'
import Table from 'react-bootstrap/Table';
import { useLoaderData } from 'react-router-dom';

export default function MyReviews() {
    const data = useLoaderData()
    let index = 0;
    console.log(data)

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
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
