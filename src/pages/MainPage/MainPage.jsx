import { MainPageStyled, MainPart, RoundsPart } from './MainPage.styled';
import Answers from 'components/Answers/Answers';
import Questions from 'components/Questions/Questions';
import Rounds from 'components/Rounds/Rounds';

function MainPage() {
  return (
    <MainPageStyled>
      <MainPart>
        <Questions />
        <Answers />
      </MainPart>
      <RoundsPart>
        <Rounds />
      </RoundsPart>
    </MainPageStyled>
  );
}

export default MainPage;
