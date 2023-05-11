import React, { useContext } from 'react'
import {AppContext} from './UseContextApp'

const User = () => {
    const {setUserName} = useContext(AppContext)
  return (
    <div>
    <input onChange={(e)=>{
        setUserName(e.target.value)
    }} />
    </div>
  )
}

export default User