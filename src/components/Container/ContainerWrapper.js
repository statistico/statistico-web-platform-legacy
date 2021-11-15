import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #31363e;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default ContainerWrapper;
