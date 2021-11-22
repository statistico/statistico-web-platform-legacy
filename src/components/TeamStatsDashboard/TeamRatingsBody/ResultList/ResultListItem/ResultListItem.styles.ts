import styled from 'styled-components';

export const ResultListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 20px;
  width: 25%;
`;

export const Opponent = styled.div`
  font-size: 20px;
  width: 45%;
  text-align: left;
`;

export const Score = styled.div`
  font-size: 20px;
  width: 20%;
  text-align: center;
`;

export const Venue = styled.div`
  font-size: 20px;
  width: 10%;
  text-align: center;
`;
