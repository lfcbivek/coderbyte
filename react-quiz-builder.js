import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

function QuizApp() {
  // do not modify the questions or answers below
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const [ curIdx, setCurIdx ] = useState(0);
  const [ answers, setAnswers ] = useState([]);
  const [ score, setScore ] = useState(0);
  const [ isQuizCompleted, setIsQuizCompleted ] = useState(false);
  const [ lastQuestionScore, setLastQuestionScore ] = useState();
  const [ curSelected, setCurSelected ] = useState();
  const handleSubmit = () => {
    //Todo
    checkAnswer(curIdx);
    if (curIdx < questions.length-1){
      setCurIdx(curIdx + 1);
    } else {
      setIsQuizCompleted(!isQuizCompleted)
    }
    setCurSelected();

  }
  
  const checkAnswer = (questionIdx) => {
    if (questions[curIdx]['correct'] === questions[curIdx]['options'][answers[curIdx]]) {
      setScore(score+1);
      setLastQuestionScore('Correct!');
    } else {
      setLastQuestionScore('Incorrect!');
    }
  }
  const handleOptionClick = (questionIdx, optionIdx) => {
    setAnswers([...answers, optionIdx]);
    setCurSelected(optionIdx);
  }

  return (
    <div style={style.container}>
        <div id="question" style={style.question}>{questions[curIdx].question}</div>
        {questions[curIdx].options.map((option, i) => {
          return(
              <div style={style.options} key={i}>
                <input 
                  id={`option${i + 1}`} 
                  type="radio" 
                  name="option" 
                  value={option} 
                  checked={curSelected === i}
                  onChange={() => handleOptionClick(curIdx, i)}
                />
                {option}
              </div>
            );

          })
      }
      <button style={style.button} id="submitBtn" onClick={handleSubmit}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}>{lastQuestionScore}</div>
      { isQuizCompleted && 
        <div id="feedback" style={style.feedback}>Quiz Complete! You scored {score} out of {questions.length}</div>
      }
      
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<QuizApp />);