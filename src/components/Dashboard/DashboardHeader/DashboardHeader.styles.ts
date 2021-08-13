import styled from 'styled-components';

const DashboardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  font-size: 30px;
  height: 100px;
  align-items: center;
  color: #22ccde;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
    height: 60px;
  }
`;

export default DashboardHeaderWrapper;
