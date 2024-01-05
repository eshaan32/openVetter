// import { useState } from 'react';

function PromptSubmission({ userPrompt, setUserPrompt }) {
  // State to hold the user's input

  // Handler for when the text in the text area changes
  const handleInputChange = (event) => {
    setUserPrompt(event.target.value);
    console.log('User Prompt:', userPrompt)
  };

  // Handler for when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('User Prompt:', userPrompt); // Logs the user prompt to the console (or handle as needed)

    // Add code here to store the prompt for further analysis
    // This could involve sending the prompt to a backend service or storing it in local state
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Text area for user to input their prompt */}
        <textarea
          value={userPrompt}
          onChange={handleInputChange}
          onPaste={handleInputChange}
          placeholder="Enter your prompt here"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded"
        />

        {/* Submit button */}
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
