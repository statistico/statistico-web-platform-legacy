import styled from 'styled-components';

const CompetitionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 10px 40px 10px;
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  width: 100%;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: fit-content;
  font-size: 20px;
  cursor: pointer;

  img {
    height: 20px;
    width: 30px;
    margin-right: 10px;
  }

  th:nth-child(2) {
    text-align: left;
  }

  td:nth-child(2) {
    text-align: left;
  }

  th,
  td {
    text-align: center;
    padding: 10px 0 10px 0;
  }

  thead {
    color: #22ccde;
  }

  table {
    border-collapse: collapse;
  }

  th,
  tr {
    border-bottom: 1px solid #dedcdc;
  }

  tr:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    th,
    td {
      text-align: left;
      padding: 5px 0 5px 0;
    }

    padding: 0;
    font-size: 12px;
  }
`;

export default CompetitionListWrapper;
