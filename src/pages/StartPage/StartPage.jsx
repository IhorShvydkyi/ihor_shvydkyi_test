import { useState } from 'react';
import handPicture from '../../images/hand.svg';
import MainPage from '../MainPage/MainPage';
import './StartPage.css';

function StartPage() {
  const [start, setStart] = useState(false);
  if (start === false) {
    return (
      <div className="startGameWrapper">
        <img alt="hand up" className="startGameImg" src={handPicture} />
        <div className="startGameLogic">
          <h1 className="startGameTitle">Who wants to be a millionaire?</h1>
          <div onClick={() => setStart(true)} className="startGameButton">
            Start
          </div>
        </div>
      </div>
    );
  }
  return <MainPage />;
}
export default StartPage;
