import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectApp = () => {
    const [data, setData] = useState('')

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=>{
            
            setData(res.data[2].email)})
            console.log(data)
    },[])        

  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default UseEffectApp