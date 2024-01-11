import React, { useState } from 'react';
import './App.css';
import PromptSubmission from './PromptSubmission';
import Button from './Button';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // state to be passed for promptSubmission
  const [userPrompt, setUserPrompt] = useState<string>('');

  const submitPrompt = () => {
    setCount(count => {
      console.log(`button clicked: ${count}`);
      return count + 1;
    });
  };

  return (
    <>
      <div className='w-96 h-96'>
        <h1 className='text-3xl font-bold underline pb-2'>
          Vet Your Prompt!
        </h1>
        <PromptSubmission userPrompt={userPrompt} setUserPrompt={setUserPrompt} />
        <Button submitPrompt={submitPrompt} />
      </div>
    </>
  );
};

export default App;
