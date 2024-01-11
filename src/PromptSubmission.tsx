import React, { useState, ChangeEvent, FormEvent } from 'react';

interface PromptSubmissionProps {
  userPrompt: string;
  setUserPrompt: (prompt: string) => void;
}

const PromptSubmission: React.FC<PromptSubmissionProps> = ({ userPrompt, setUserPrompt }) => {

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserPrompt(event.target.value);
    console.log('User Prompt:', userPrompt);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('User Prompt:', userPrompt);
    // Additional code to handle the prompt
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={userPrompt}
          onChange={handleInputChange}
          placeholder="Enter your prompt here"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Prompt
        </button>
      </form>
    </div>
  );
}

export default PromptSubmission;
