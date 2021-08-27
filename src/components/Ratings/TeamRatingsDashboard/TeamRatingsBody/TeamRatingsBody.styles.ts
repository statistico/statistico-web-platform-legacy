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

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const CentrePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const FixturePanel = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 60%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #31363e;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
  }
`;
