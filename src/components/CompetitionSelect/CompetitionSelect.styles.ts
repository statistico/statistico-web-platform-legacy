import styled from 'styled-components';

const CompetitionSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;

  p {
    padding: 10px 0 15px 5px;
  }

  @media (min-width: 768px) {
    align-content: center;

    p {
      width: 100%;
      text-align: left;
    }
  }
`;

export default CompetitionSelectWrapper;
