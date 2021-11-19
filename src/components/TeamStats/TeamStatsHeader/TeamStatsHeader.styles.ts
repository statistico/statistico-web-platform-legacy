import styled from 'styled-components';

export const TeamStatsHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 30%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 26px;
  color: #22ccde;

  @media (min-width: 768px) {
    justify-content: flex-end;
    font-size: 40px;
    width: 25%;
  }
`;
