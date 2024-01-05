import { useState } from 'react'
import './App.css'
import PromptSubmission from './promptSubmission'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  // state to be passed for promptSubmission
  const [userPrompt, setUserPrompt] = useState('');


  const increment = () => {
    console.log(`button clicked: ${count}`)
    setCount(count => count + 1)
    console.log("count: ", count)
  }
  return (
    <>
      <div className=' w-96 h-96'>
        <h1 className='text-3xl font-bold underline pb-2'>
          Vet Your Prompt!
        </h1>
        <PromptSubmission userPrompt={userPrompt} setUserPrompt={setUserPrompt} />
        {/* <Button /> */}
      </div>

    </>
  )
}

export default App
