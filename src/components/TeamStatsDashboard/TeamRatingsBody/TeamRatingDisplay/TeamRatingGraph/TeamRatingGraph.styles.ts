import styled from 'styled-components';

const TeamRatingGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 300px;
  background-color: #383b44;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin: 10px 0;
  padding: 10px;
  align-items: center;

  @media (min-width: 768px) {
    width: 49%;
    height: 400px;
    padding: 30px;
    margin: 15px 0;
  }
`;

export default TeamRatingGraphWrapper;
