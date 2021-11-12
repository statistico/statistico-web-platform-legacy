import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default ContainerWrapper;
