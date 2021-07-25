import styled from 'styled-components';

const CompetitionListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0 20px 0;
  height: fit-content;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export default CompetitionListWrapper;
