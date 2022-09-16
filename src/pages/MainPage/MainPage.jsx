import React, { useState, useEffect, useMemo } from 'react';
import s from './MainPage.module.css';
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
  const [roundIndex, setRoundIndex] = useState(0);
  const [round, setRound] = useState(data.round);
  const [countAnswered, setCountAnswered] = useState(1);
  const [totalQuest, setTotalQuest] = useState(0);

  const questionsArray = useMemo(() => {
    return shuffle(data.questions);
  });

  const currentQuestion = questionsArray[question];
  const currentAnswers = currentQuestion.answers;
  const currentAnswer = currentQuestion.rightAnswer;

  const alphabet = Array.apply(undefined, Array(26))
    .map(function (x, y) {
      return String.fromCharCode(y + 65);
    })
    .join('');

  // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    if (questionsArray.length > round.length) {
      setTotalQuest(round.length);
      // console.log('roundIndex', roundIndex);
      // console.log('currentAnswer', currentAnswer);
    } else {
      setTotalQuest(questionsArray.length);
      setRound(round.splice(0, questionsArray.length));
    }
  }, [currentAnswer, questionsArray.length, round]);

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
  // async function disableButtons() {
  //   setDisabledBtns('disabled');
  //   await delay(1700);
  //   setDisabledBtns('');
  // }
  if (end === false) {
    return (
      <div className={s.mainGameWrapper}>
        <div className={s.mainGameBoard}>
          <div className={s.mainGameQuestionsBlock}>
            <h2 key={currentQuestion.id} className={s.mainGameQuestion}>
              {currentQuestion.question}
            </h2>
          </div>
          <div className={s.mainGameAnswers}>
            {currentAnswers.map((answer, i) => (
              <Answers
                key={i}
                letter={alphabet[i]}
                answer={answer}
                currentAnswer={currentAnswer}
                // disableButtons={disableButtons}
                onSelect={checkAnswer}
              />
            ))}
          </div>
        </div>
        <div className={s.mainGameScoreContainer}>
          <div className={s.mainGameScoreWrap}>
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
