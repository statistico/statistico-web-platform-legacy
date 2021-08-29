import styled from 'styled-components';

const RatingCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    div:nth-child(1) {
      margin-left: 0;
    }

    div:nth-child(4) {
      margin-right: 0;
    }
  }
`;

export default RatingCardsWrapper;
