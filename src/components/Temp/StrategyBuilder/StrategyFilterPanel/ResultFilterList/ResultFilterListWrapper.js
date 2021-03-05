import styled from 'styled-components';

const ResultFilterListWrapper = styled.div`
  height: 50%;

  span {
    padding: 0 10px 0 10px;
    font-weight: 600;
    font-size: 16px;
  }

  table {
    text-align: left;
    width: 100%;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      color: #22ccde;
    }

    th,
    td {
      margin: 0;
      border-bottom: 1px solid #ccc;
      padding: 5px 0 5px 0;
      text-align: left;
    }
  }

  svg {
    :hover {
      cursor: pointer;
      color: #22ccde;
    }
  }
`;

export default ResultFilterListWrapper;
