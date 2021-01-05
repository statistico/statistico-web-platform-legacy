import styled from 'styled-components';

const CompetitionListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: #22ccde;
  font-weight: 600;

  p {
    width: 20%;
    text-align: center;

    :first-child {
      width: 20%;
      text-align: left;
    }

    :last-child {
      width: 10%;
    }
  }
`;

export default CompetitionListHeaderWrapper;
