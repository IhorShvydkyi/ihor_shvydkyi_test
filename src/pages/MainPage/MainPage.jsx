import s from './MainPage.module.css';
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
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </div>
      </div>
      <div className={s.mainGameScore}></div>
    </div>
  );
}

export default MainPage;
