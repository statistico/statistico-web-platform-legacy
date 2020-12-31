import styled from 'styled-components';

const ResultFilterListWrapper = styled.div`
  table {
    border: 1px solid black;
    background-color: #d9dbdc;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
    width: 100%;
    font-size: 14px;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      border-bottom: 1px solid black;
      padding: 5px 0 5px 0;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export default ResultFilterListWrapper;
