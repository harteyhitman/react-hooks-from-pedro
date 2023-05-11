import React, { useRef } from 'react'

const UseRefApp = () => {

    const inputRef = useRef(null)

        const onclick = () => {
            inputRef.current.value = ''
            // focus()
        }
  return (
    <div>
        <h1>New pedro</h1>
        <input type="text" placeholder='Ex...' ref={inputRef} />
       <button onClick={onclick}>Change Names</button>
    </div>
  )
}

export default UseRefApp