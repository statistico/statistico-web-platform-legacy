import styled from 'styled-components';

const SeasonListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;

export default SeasonListWrapper;
