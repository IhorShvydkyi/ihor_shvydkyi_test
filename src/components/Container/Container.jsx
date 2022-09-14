import { ContainerMain } from './Container.styled';

const Container = ({ children }) => {
  return (
    <ContainerMain>
      Who wants to be a millionaire?
      {children}
    </ContainerMain>
  );
};

export default Container;
