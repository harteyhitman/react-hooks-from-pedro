import React, { useState } from 'react'

const Button = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button onClick={()=>{
        setToggle(!toggle)
      }}
      >
      Button from Child</button>
      {!toggle && <span>Toggle</span>}
    </div>
  )
}

export default Button