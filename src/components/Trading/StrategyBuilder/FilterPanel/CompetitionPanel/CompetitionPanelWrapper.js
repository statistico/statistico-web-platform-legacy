import styled from 'styled-components';

const CompetitionPanelWrapper = styled.div`
  display: flex;
  width: 49%;
  border-radius: 10px;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: 300px;

  @media (max-width: 768px) {
    width: 98%;
    margin-bottom: 20px;
  }
`;

export default CompetitionPanelWrapper;
