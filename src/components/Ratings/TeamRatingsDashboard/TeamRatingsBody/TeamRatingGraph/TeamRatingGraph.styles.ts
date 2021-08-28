import styled from 'styled-components';

const TeamRatingGraphWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 400px;
    padding: 30px;
    background-color: #31363e;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    margin: 15px 0;
  }
`;

export default TeamRatingGraphWrapper;
