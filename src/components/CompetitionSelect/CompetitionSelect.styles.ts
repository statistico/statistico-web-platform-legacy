import styled from 'styled-components';

const CompetitionSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #a1a9b1;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
  color: #1b1e22;

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
