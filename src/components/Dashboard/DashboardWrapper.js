import styled from 'styled-components';

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;

  @media (min-width: 768px) {
    display: flex;
    width: calc(100% - 80px);
    margin-left: 130px;
    min-height: 100vh;
    height: fit-content;
    padding: 40px 60px;
  }
`;

export default DashboardWrapper;
