import styled from 'styled-components';

const CompetitionCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  font-size: 20px;

  label {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  input {
    margin: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }

  img {
    height: 20px;
    width: 30px;
    margin-right: 10px;
  }
`;

export default CompetitionCheckboxWrapper;
