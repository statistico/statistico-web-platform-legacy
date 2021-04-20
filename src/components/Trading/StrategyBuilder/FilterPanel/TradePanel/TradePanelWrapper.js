import styled from 'styled-components';

export const TradePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 49%;
  border-radius: 10px;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
  height: fit-content;
  padding: 15px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 98%;
    height: fit-content;

    p {
      font-size: 16px;
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
