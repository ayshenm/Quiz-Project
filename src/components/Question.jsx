/* eslint-disable react/prop-types */

import Options from "./Options";

function Question({ question, answer, dispatch }) {
  console.log(question);
  return (
    <div className="flex flex-col gap-y-3">
      <h4 className="">{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
