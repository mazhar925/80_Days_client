import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

export default function Restricted({children}) {
    const {user } = useContext(AuthContext)

  if(user){
    return <Navigate to='/'></Navigate>
  }
  return children;
}