import React, { useEffect, useLayoutEffect, useRef } from 'react'


const UseLayoutEffectApp = () => {
    const inputRef = useRef(null)
    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    }, [])

    useEffect(()=>{
        inputRef.current.value="Hello"
    })
  return (
    <div>
    <input  ref={inputRef}  value='Pedro'style={{width: 400, height: 100}}/>
    </div>
  )
}

export default UseLayoutEffectApp