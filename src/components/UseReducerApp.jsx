import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1, showText: state.showText}
            case 'toggleShowText':
                return {count: state.count, showText: !state.showText}    
                default:
                    return state;
            }
  }  

const UseReducerApp = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})
return (
    <div>
    <h1>{state.count}</h1>
    <button onClick={() =>{
        dispatch({type: 'INCREMENT'})
        dispatch({type: 'toggleShowText'})
    }}>press to increase</button>
    {state.showText && <p>this is a number </p>}
    </div>
  )

}
  


export default UseReducerApp;