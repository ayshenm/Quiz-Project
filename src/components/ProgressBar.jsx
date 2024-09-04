// eslint-disable-next-line react/prop-types
function ProgressBar({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="flex justify-between flex-col gap-y-3 items-center  mt-5 mb-5">
      <p>
        Question:
        <strong className="text-green-800">{index + 1} / </strong>
        {numQuestions}
      </p>
      <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <progress
          className="absolute top-0 left-0 h-full w-full"
          max={numQuestions}
          value={index + Number(answer !== null)}
        />
      </div>
      <p>
        Points: <strong className="text-green-800">{points} / </strong>
        {maxPossiblePoints}
      </p>
    </header>
  );
}

export default ProgressBar;
