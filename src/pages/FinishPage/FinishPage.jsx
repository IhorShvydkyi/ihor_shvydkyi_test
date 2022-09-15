import s from './FinishPage.module.css';
import handPicture from '../../images/hand.svg';

function FinishPage() {
  return (
    <div className={s.finishGameWrapper}>
      <img alt="hand up" className={s.finishGameImg} src={handPicture} />
      <div className={s.finishGameLogic}>
        <p className={s.finishGameTotal}>Total score:</p>
        <h1 className={s.finishGameScore}>$0 earnd</h1>
        <a href="/" className={s.finishGameButton}>
          Try again
        </a>
      </div>
    </div>
  );
}
export default FinishPage;
