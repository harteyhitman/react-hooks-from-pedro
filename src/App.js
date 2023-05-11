import React from 'react'
import './App.css'
import UsestateApp from './components/UsestateApp'
import UseReducerApp from './components/UseReducerApp'
import UseEffectApp from './components/UseEffectApp'
import UseRefApp from './components/UseRefApp'
import UseLayoutEffectApp from './components/UseLayoutEffectApp'
import UseImperativeApp from './components/UseImperativeApp'
import UseContextApp from './components/UseContextApp'

const App = () => {
  return (
    <div>
      <UsestateApp/>
      <UseReducerApp/>
      <UseEffectApp/>
      <UseRefApp/>
      <UseLayoutEffectApp/>
      <UseImperativeApp/>
      <UseContextApp />
    </div>
  )
}

export default App