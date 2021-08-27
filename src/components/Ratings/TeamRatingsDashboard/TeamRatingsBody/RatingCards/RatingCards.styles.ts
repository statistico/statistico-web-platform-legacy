import styled from 'styled-components';

const RatingCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default RatingCardsWrapper;
