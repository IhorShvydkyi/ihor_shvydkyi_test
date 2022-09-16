import { useState } from 'react';
import s from './StartPage.module.css';
import handPicture from '../../images/hand.svg';
import MainPage from '../MainPage/MainPage';

function StartPage() {
  const [start, setStart] = useState(false);
  if (start === false) {
    return (
      <div className={s.startGameWrapper}>
        <img alt="hand up" className={s.startGameImg} src={handPicture} />
        <div className={s.startGameLogic}>
          <h1 className={s.startGameTitle}>Who wants to be a millionaire?</h1>
          <div onClick={() => setStart(true)} className={s.startGameButton}>
            Start
          </div>
        </div>
      </div>
    );
  }
  return <MainPage />;
}
export default StartPage;
