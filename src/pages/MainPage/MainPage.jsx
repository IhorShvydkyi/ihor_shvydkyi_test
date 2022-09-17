import React, { useState, useEffect, useMemo } from 'react';
import './MainPage.css';
import Answers from '../../components/Answers/Answers';
import Rounds from 'components/Rounds/Rounds';
import data from '../../data';
import FinishPage from 'pages/FinishPage/FinishPage';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState(currentIndex);
  const [end, setEnd] = useState(false);
  const [disabledBtns, setDisabledBtns] = useState('');
  const [mobileMenu, setMobileMenu] = useState('');
  const [roundIndex, setRoundIndex] = useState(0);
  const [round, setRound] = useState(data.round);
  const [countAnswered, setCountAnswered] = useState(1);
  const [totalQuest, setTotalQuest] = useState(0);

  const questionsArray = useMemo(() => {
    return shuffle(data.questions);
  }, []);

  const currentQuestion = questionsArray[question];
  const currentAnswers = currentQuestion.answers;
  const currentAnswer = currentQuestion.rightAnswer;

  const alphabet = Array.apply(undefined, Array(26))
    .map(function (x, y) {
      return String.fromCharCode(y + 65);
    })
    .join('');

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    if (questionsArray.length > round.length) {
      setTotalQuest(round.length);
      // console.log('roundIndex', roundIndex);
      // console.log('currentAnswer', currentAnswer);
    } else {
      setTotalQuest(questionsArray.length);
      setRound(round.splice(0, questionsArray.length));
    }
  }, []);

  useEffect(() => {
    setQuestion(currentIndex);
    setCountAnswered(1);
  }, [currentIndex]);

  function nextQuestion() {
    if (currentIndex < totalQuest - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setEnd(true);
    }
  }

  function checkAnswer(answer) {
    if (currentQuestion.rightAnswer.includes(answer)) {
      if (currentAnswer.length === countAnswered) {
        setRoundIndex(roundIndex + 1);
        nextQuestion();
      } else {
        setCountAnswered(countAnswered + 1);
      }
    } else {
      setEnd(true);
    }
  }
  async function disableButtons() {
    setDisabledBtns('disabled');
    await delay(1700);
    setDisabledBtns('');
  }

  function openMenu() {
    if (mobileMenu === '' || mobileMenu === 'close') {
      setMobileMenu('open');
    }

    if (mobileMenu === 'open') {
      setMobileMenu('close');
    }
  }
  if (end === false) {
    return (
      <div className="mainGameWrapper">
        <div className={`menu ${mobileMenu}`} onClick={openMenu}>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1Z"
              fill="#1C1C21"
            />
            <path
              d="M0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7Z"
              fill="#1C1C21"
            />
            <path
              d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H1Z"
              fill="#1C1C21"
            />
          </svg>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.364 2.05025C13.7545 1.65972 13.7545 1.02656 13.364 0.636033C12.9734 0.245508 12.3403 0.245509 11.9497 0.636033L6.99999 5.58579L2.05026 0.636061C1.65974 0.245537 1.02657 0.245537 0.63605 0.636061C0.245526 1.02659 0.245526 1.65975 0.63605 2.05028L5.58577 7L0.636033 11.9497C0.245509 12.3403 0.245508 12.9734 0.636033 13.364C1.02656 13.7545 1.65972 13.7545 2.05025 13.364L6.99999 8.41421L11.9498 13.364C12.3403 13.7545 12.9734 13.7545 13.364 13.364C13.7545 12.9735 13.7545 12.3403 13.364 11.9498L8.4142 7L13.364 2.05025Z"
              fill="#1C1C21"
            />
          </svg>
        </div>
        <div className="mainGameBoard">
          <div className="mainGameQuestionsBlock">
            <h2 key={currentQuestion.id} className="mainGameQuestion">
              {currentQuestion.question}
            </h2>
          </div>
          <div className={`mainGameAnswers ${disabledBtns}`}>
            {currentAnswers.map((answer, i) => (
              <Answers
                key={i}
                letter={alphabet[i]}
                answer={answer}
                currentAnswer={currentAnswer}
                disableButtons={disableButtons}
                onSelect={checkAnswer}
              />
            ))}
          </div>
        </div>
        <div className={`mainGameScoreContainer ${mobileMenu}`}>
          <div className="mainGameScoreWrap">
            {round.map((round, i) => (
              <Rounds
                key={i}
                round={round}
                currentIndex={roundIndex}
                indexRound={i}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <FinishPage score={round[roundIndex - 1]} />;
}

export default MainPage;
