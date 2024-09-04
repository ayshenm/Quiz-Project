// eslint-disable-next-line react/prop-types
function NextButton({ dispatch, answer,index,numQuestions }) {
  if (answer === null) {
    return null;
  }
  if(index < numQuestions - 1)
    return(
  <button className="rounded-lg bg-green-500 text-white py-2 px-2" onClick={() => dispatch({type : 'nextQuestion'})}>NextButton</button>);

  if(index === numQuestions - 1)
    return(
  <button className="rounded-lg bg-purple-500 text-white py-2 px-2" onClick={() => dispatch({type : 'finish'})}>Finish</button>);
}


export default NextButton;
