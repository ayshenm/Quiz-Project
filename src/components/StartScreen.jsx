// eslint-disable-next-line react/prop-types
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="flex flex-col gap-y-3 items-center">
      <h2 className="text-xl">Welcome to the Quiz!</h2>
      <h3 className="text-lg">{numQuestions} question to the test</h3>
      <button
        className="rounded-lg bg-green-600 py-1 px-2 text-white text-xl"
        onClick={() => dispatch({ type: "start" })}>
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
