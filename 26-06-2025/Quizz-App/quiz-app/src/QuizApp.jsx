import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Syntax",
      "Computer Style System",
      "Creative Style Structure",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used for a hyperlink?",
    options: ["<link>", "<a>", "<h>", "<href>"],
    answer: "<a>",
  },
];

function QuestionCard({ questionData, onAnswer }) {
  return (
    <div className="card">
      <h2 className="question">{questionData.question}</h2>
      {questionData.options.map((opt, index) => (
        <button
          key={index}
          onClick={() => onAnswer(opt)}
          className="option-btn"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function QuizApp() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleAnswer(selected) {
    const correct = questions[currentQ].answer;
    if (selected === correct) {
      setScore(score + 1);
    }
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFinished(true);
    }
  }

  return (
    <div className="quiz-container">
      {finished ? (
        <div className="result">
          <h1>🎉 Quiz Completed!</h1>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <QuestionCard
          questionData={questions[currentQ]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizApp;
