import styled from 'styled-components';

const CompetitionToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 16px;
  text-transform: uppercase;

  input {
    margin-left: 12px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default CompetitionToggleWrapper;
