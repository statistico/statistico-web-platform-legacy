import styled from 'styled-components';

const CompetitionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px 10px 10px;
  margin: 15px 10px 40px 10px;
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  width: 70%;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: fit-content;
  font-size: 16px;

  div {
    border-bottom: 1px solid #dedcdc;
  }

  div:last-child {
    border-bottom: none;
  }
`;

export default CompetitionListWrapper;
