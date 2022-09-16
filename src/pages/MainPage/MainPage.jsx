import s from './MainPage.module.css';
import Answers from '../../components/Answers/Answers';
import Rounds from 'components/Rounds/Rounds';
function MainPage() {
  return (
    <div className={s.mainGameWrapper}>
      <div className={s.mainGameBoard}>
        <div className={s.mainGameQuestionsBlock}>
          <h2 className={s.mainGameQuestion}>
            In the UK, the abbreviation NHS stands for National 'what' Service?
          </h2>
        </div>
        <div className={s.mainGameAnswers}>
          <Answers />
        </div>
      </div>
      <div className={s.mainGameScore}>
        <Rounds />
      </div>
    </div>
  );
}

export default MainPage;
