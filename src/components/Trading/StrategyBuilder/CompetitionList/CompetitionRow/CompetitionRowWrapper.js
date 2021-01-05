import styled from 'styled-components';

const CompetitionRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: #dedcdc;

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

export default CompetitionRowWrapper;
