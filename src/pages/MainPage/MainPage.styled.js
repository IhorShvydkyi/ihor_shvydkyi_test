import styled from '@emotion/styled';
import { theme } from '../../constants/Theme';

export const MainPageStyled = styled.div`
  height: 100vh;
  display: flex;
  color: ${theme.colors.mainBlack};
`;

export const MainPart = styled.div`
  background-color: ${theme.colors.mainBackground};
  width: 75%;
`;

export const RoundsPart = styled.div`
  background-color: ${theme.colors.mainWhite};
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
