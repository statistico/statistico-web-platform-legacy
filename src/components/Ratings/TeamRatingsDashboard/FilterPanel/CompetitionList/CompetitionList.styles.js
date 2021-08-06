import styled from 'styled-components';

const CompetitionListWrapper = styled.div`
  display: flex;
  flex: 50%;
  align-content: center;
  flex-wrap: wrap;
  padding: 0px 25px 0px 25px;
  height: fit-content;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default CompetitionListWrapper;
