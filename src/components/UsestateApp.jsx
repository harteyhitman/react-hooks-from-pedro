import React, { useState } from 'react'

const UsestateApp = () => {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState('pedro')

    const increment = () =>{
      setCounter(counter+1)
    }

    const changeInput = (e) => {
      // setInputValue(e.target.value)
      const newValue = e.target.value
      setInputValue(newValue)
    }

  return (
    <div>
        {counter} <button onClick={increment}>increase</button> <br />
    <input  type="text" placeholder='enter something here...' value={inputValue} onChange={changeInput} /> <br />
    {inputValue}
    </div>
  )
}

export default UsestateApp