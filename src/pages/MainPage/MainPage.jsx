import s from './MainPage.module.css';
function MainPage() {
  return (
    <div className={s.mainGameWrapper}>
      <div className={s.mainGameBoard}>
        <div className={s.mainGameQuestion}>Question</div>
        <div className={s.mainGameAnswers}>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </div>
      </div>
      <div className="mainGameScore"></div>
    </div>
  );
}

export default MainPage;
