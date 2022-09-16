import { useState } from 'react';
import s from './FinishPage.module.css';
import handPicture from '../../images/hand.svg';
import MainPage from 'pages/MainPage/MainPage';

function FinishPage() {
  const [start, setStart] = useState(false);

  if (start === false) {
    return (
      <div className={s.finishGameWrapper}>
        <img alt="hand up" className={s.finishGameImg} src={handPicture} />
        <div className={s.finishGameLogic}>
          <p className={s.finishGameTotal}>Total score:</p>
          <h1 className={s.finishGameScore}>$0 earnd</h1>
          <div onClick={() => setStart(true)} className={s.finishGameButton}>
            Try again
          </div>
        </div>
      </div>
    );
  }
  return <MainPage />;
}
export default FinishPage;
