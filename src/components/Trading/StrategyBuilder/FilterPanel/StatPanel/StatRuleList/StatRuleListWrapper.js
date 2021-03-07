import styled from 'styled-components';

const StatRuleListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 100%;

  p {
    margin-left: 15px;
  }

  table {
    text-align: left;
    margin-left: 15px;
    font-size: 16px;

    tr {
      border: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;

    table {
      text-align: left;
      margin-left: 0;
    }

    p {
      margin-left: 0;
    }
  }
`;

export default StatRuleListWrapper;
