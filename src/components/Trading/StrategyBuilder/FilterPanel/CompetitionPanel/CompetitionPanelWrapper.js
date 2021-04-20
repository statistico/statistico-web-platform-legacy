import styled from 'styled-components';

export const CompetitionPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 49%;
  border-radius: 10px;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
  height: 392px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 98%;
    margin-bottom: 10px;
    height: fit-content;
  }
`;

export const CompetitionListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;
