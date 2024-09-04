/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function Options({ question, dispatch, answer }) {
    
  const hasAnswered = answer !== null;
  return (
    <div className="flex gap-y-1 flex-col">
      {question.options.map((option, index) => (
        <button
          className={`rounded-lg cursor-pointer py-2 border text-gray-900 bg-gray-300  ${index === answer ? "" : ""} ${
            hasAnswered ? index === question.correctOption ? "!bg-green-900 !text-white" : "!bg-red-600" : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
