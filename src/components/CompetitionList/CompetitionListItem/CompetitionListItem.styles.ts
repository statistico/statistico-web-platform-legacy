import styled from 'styled-components';

const CompetitionListItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  height: 120px;
  width: 120px;
  margin: 5px;
  align-items: center;
  cursor: pointer;

  img {
    height: 75%;
    width: 75%;
  }

  &:hover {
    background: #22ccde;
  }

  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

export default CompetitionListItemWrapper;
