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
    padding: 20px 30px 20px 0;
    height: 80px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    width: 50%;
    order: 1;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 26px;
  color: #22ccde;
  padding: 15px 0;
  order: 1;

  @media (min-width: 768px) {
    justify-content: flex-end;
    font-size: 40px;
    width: 25%;
    order: 2;
  }
`;
