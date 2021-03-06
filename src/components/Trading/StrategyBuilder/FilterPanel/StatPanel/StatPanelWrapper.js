import styled from 'styled-components';

const StatPanelWrapper = styled.div`
  display: flex;
  width: 59%;
  border-radius: 10px;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: 350px;
  margin: 20px 0 20px 0;

  @media (max-width: 768px) {
    width: 98%;
    margin: 0 0 20px 0;
  }
`;

export default StatPanelWrapper;
