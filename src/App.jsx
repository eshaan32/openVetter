import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    console.log(`button clicked: ${count}`)
    setCount(count => count + 1)
    console.log("count: ", count)
  }
  return (
    <>
      <div className=' w-96 h-96'>
        <h1 className='text-3xl font-bold underline'>
          Hello world! {count}
        </h1>
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={increment}>
        Increment Count
      </button>
    </>
  )
}

export default App
