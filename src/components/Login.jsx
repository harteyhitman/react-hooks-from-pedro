import React, { useContext } from 'react'
import {AppContext} from './UseContextApp'

const Login = () => {
    const {username} =  useContext(AppContext)
  return (
    <div> 
    <h1>User: {username}</h1>
    </div>
  )
}

export default Login