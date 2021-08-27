import styled from 'styled-components';

export const TeamRatingsBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 40px;
  }
`;

export const TeamSeasons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;

  @media (min-width: 768px) {
    width: 200px;
  }
`;
