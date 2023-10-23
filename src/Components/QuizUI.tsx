import React, { useState } from "react";
import { QuizData } from "./QuizDataa";

const QuizUI = () => {
  const totalScore = QuizData.length;
  const [number, setNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState<boolean>(false);
  const [answerVar, setAanswerVar] = useState(-1);

  function handleClick() {
    if (currentQuestion === QuizData.length - 1) {
      //   setCurrentQuestion(0);
      //   setNumber(1);
      setShowTotalScore(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setNumber(number + 1);
    }
  }
  function handleCheckAnswer(selectedAnswer: number) {
    console.log(selectedAnswer);
    console.log(QuizData[currentQuestion].answer);

    if (selectedAnswer === QuizData[currentQuestion].answer) {
      setScore(score + 1)
    }
    handleClick()
    setAanswerVar(-1);
  }

  function handleStartAgain() {
    setCurrentQuestion(0);
    setNumber(1);
    setShowTotalScore(false);
    setAanswerVar(-1);
  }

  function SetVar(index: number) {
    console.log("inside set var", index)
    setAanswerVar(index)
    
  }

  return (
    <div className="w-96 h-auto m-auto">
      <div className="flex justify-center">
        <span className="flex"> {number}. &nbsp; &nbsp; &nbsp; </span>
        <span className="flex justify-center w-full">
          {QuizData[currentQuestion].question}
        </span>
      </div>
      <div className="flex flex-col">
        {QuizData[currentQuestion].options.map((option, index) => (
           <button
           key={index}
           onClick={() => SetVar(index + 1)}
           className={`text-red-900 rounded hover:rounded-lg m-2 p-2 ${
             answerVar === index + 1 ? "bg-green-300" : "bg-red-300"
           }`}
         >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-center m-3 cursor-pointer">
        {showTotalScore ? (
          <div>
            {" "}
            Total Score : {score} out of {totalScore}<br />{" "}
            <button
              onClick={handleStartAgain}
              className="p-1 text-blue-700 bg-blue-400 rounded"
            >
              Start Again
            </button>
          </div>
        ) : (
          <div
            className="flex justify-center p-1 text-blue-700 bg-blue-400 rounded w-14"
            onClick={()=> handleCheckAnswer(answerVar) }
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizUI;