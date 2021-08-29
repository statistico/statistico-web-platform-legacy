import styled from 'styled-components';

const TeamRatingDisplayWrapper = styled.div`
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

export default TeamRatingDisplayWrapper;
