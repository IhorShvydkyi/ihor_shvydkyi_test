import s from './StartPage.module.css';
import handPicture from '../../images/hand.svg';

function StartPage() {
  return (
    <div className={s.startGameWrapper}>
      <img alt="hand up" className={s.startGameImg} src={handPicture} />
      <div className={s.startGameLogic}>
        <h1 className={s.startGameTitle}>Who wants to be a millionaire?</h1>
        <a href="/" className={s.startGameButton}>
          Start
        </a>
      </div>
    </div>
  );
}
export default StartPage;
