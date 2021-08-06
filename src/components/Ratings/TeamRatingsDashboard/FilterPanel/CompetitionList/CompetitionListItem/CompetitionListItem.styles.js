import styled from 'styled-components';

const CompetitionListItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #d1d6dd;
  border-radius: 10px;
  height: 125px;
  width: 125px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
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
    height: 160px;
    width: 160px;
  }
`;

export default CompetitionListItemWrapper;
