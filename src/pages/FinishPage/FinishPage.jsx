import { useState } from 'react';
import handPicture from '../../images/hand.svg';
import MainPage from 'pages/MainPage/MainPage';
import './FinishPage.css';

function FinishPage({ score }) {
  const [start, setStart] = useState(false);

  if (start === false) {
    return (
      <div className="finishGameWrapper">
        <img alt="hand up" className="finishGameImg" src={handPicture} />
        <div className="finishGameLogic">
          <p className="finishGameTotal">Total score:</p>
          <h1 className="finishGameScore">${score ? score : '0'}</h1>
          <div onClick={() => setStart(true)} className="finishGameButton">
            Try again
          </div>
        </div>
      </div>
    );
  }
  return <MainPage />;
}
export default FinishPage;
