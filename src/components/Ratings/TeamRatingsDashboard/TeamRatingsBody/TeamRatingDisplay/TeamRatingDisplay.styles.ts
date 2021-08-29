import styled from 'styled-components';

export const TeamRatingDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    margin-left: 50px;
  }
`;

export const GraphRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
