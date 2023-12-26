import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count => count++)
  }
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world! {count}
      <button onClick={increment}></button>
    </h1>
    </>
  )
}

export default App
