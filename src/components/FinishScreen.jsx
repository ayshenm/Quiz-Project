// eslint-disable-next-line react/prop-types
function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "😍";
  if (percentage >= 80 && percentage < 100) emoji = "🤞";
  if (percentage >= 50 && percentage < 80) emoji = "✌";
  if (percentage >= 0 && percentage < 50) emoji = "😒";
  if (percentage === 0) emoji = "🤷‍♂️";
  return (
    <div className="flex flex-col gap-y-3 items-center mt-5">
      <p className="text-lg">
        <span>{emoji}</span> You scored <strong className="text-purple-800"> {points} </strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="text-purple-800 text-xl"> (Highscore: {highscore} points)</p>
      <button className="rounded-lg bg-green-700 text-white px-2 py-2" onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </button>
    </div>
  );
}

export default FinishScreen;
