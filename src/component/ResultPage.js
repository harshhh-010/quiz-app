import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const questions = useSelector((state) => state.questions);
  const answers = useSelector((state) => state.answers);
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach((question, index) => {
      if (!answers[index]) {
        skipped++;
      } else if (answers[index] === question.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    return {
      correct,
      wrong,
      skipped,
    };
  };

  const results = calculateResults();

  return (
    <div className="resultpage text-white h-screen py-14 bg-slate-900 flex flex-row justify-center items-center">
      <div className="innerbox bg-slate-700 p-10 h-[450px] w-[500px] rounded-xl">
        <h1 className="heading px-10 py-3 w-full bg-slate-900 rounded-full my-3 flex flex-row justify-center items-center">Results</h1>
        <p className="heading px-10 py-3 w-full bg-slate-900 rounded-full my-3 flex flex-row justify-center items-center">Score: {results.correct}</p>
        <p className="heading px-10 py-3 w-full bg-slate-900 rounded-full my-3 flex flex-row justify-center items-center">Correct Answers: {results.correct}</p>
        <p className="heading px-10 py-3 w-full bg-slate-900 rounded-full my-3 flex flex-row justify-center items-center">Wrong Answers: {results.wrong}</p>
        <p className="heading px-10 py-3 w-full bg-slate-900 rounded-full my-3 flex flex-row justify-center items-center">Skipped Questions: {results.skipped}</p>
        <button className="heading px-10 py-3 w-full bg-slate-900 rounded-full my-3 flex flex-row justify-center items-center" onClick={handleHome}>Restart</button>
      </div>
    </div>
  );
};

export default ResultsPage;
