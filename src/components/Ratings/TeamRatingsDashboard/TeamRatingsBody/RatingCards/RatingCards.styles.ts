import styled from 'styled-components';

const RatingCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
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
