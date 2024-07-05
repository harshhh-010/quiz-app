import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, setAnswers } from "../redux/action";
import { useNavigate } from "react-router-dom";
import questionsData from "../question.json";

const QuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions) || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswer] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    // Select 15 random questions from the JSON data
    const shuffledQuestions = questionsData.questions.sort(
      () => 0.5 - Math.random()
    );
    const selectedQuestions = shuffledQuestions.slice(0, 15);
    dispatch(setQuestions(selectedQuestions));
  }, [dispatch]);

  const handleChange = (answer) => {
    setSelectedAnswer(answer);
    setAnswer({
      ...answers,
      [currentQuestionIndex]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      dispatch(setAnswers(answers));
      navigate("/results");
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page text-white h-screen py-14 bg-slate-900 flex flex-row justify-center items-center">
      <div className="Quiz-heading bg-slate-700 p-10 h-[400px] w-[500px] rounded-xl">
        <p className="question-box mb-3 border-4 bg-slate-900 rounded-3xl p-4 h-[95px] flex flex-row justify-center">
          {currentQuestion.question}
        </p>
        <div className="answer-box h-[140px] ">
          {currentQuestion.choices.map((choice, i) => (
            <label key={i}>
              <input
                className="input-option my-2 ml-5"
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={choice}
                checked={selectedAnswer === choice}
                onChange={() => handleChange(choice)}
              />
              {choice} <br />
            </label>
          ))}
          <div className="flex justify-around">
            <button
              className="px-10 py-2  text-lg font-semibold  mt-5 bg-slate-950 rounded-full"
              onClick={handleNext}
            >
              {currentQuestionIndex < questions.length - 1
                ? "Next"
                : "Submit Answers"}
            </button>
            <p className="px-10 py-2  text-lg font-semibold  mt-5 bg-slate-950 rounded-full">
              {currentQuestionIndex + 1}/{questions.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
