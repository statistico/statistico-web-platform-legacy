import styled from 'styled-components';

export const TeamRatingsBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    align-items: flex-start;
  }
`;

export const TeamSeasons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 220px;
  }
`;