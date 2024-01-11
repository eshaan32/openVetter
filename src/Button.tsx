function Button() {

  function submitUserPrompt() {
    console.log('This is the prompt you want to vet:\n')
  }

  return (
    <>
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={submitUserPrompt}
      >
        Button Component button
      </button>
    </>
  )
}

export default Button