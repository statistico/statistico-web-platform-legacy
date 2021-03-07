import styled from 'styled-components';

export const ResultPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 39%;
  border-radius: 10px;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: fit-content;
  margin: 20px 0 20px 0;
  padding: 15px;

  table {
    width: 100%;
    text-align: left;
    margin-left: 20px;
    font-size: 18px;
  }

  svg {
    color: #22ccde;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    width: 98%;
    margin: 0 0 20px 0;

    table {
      text-align: left;
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;

export const ResultRuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
