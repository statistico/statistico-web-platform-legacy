import styled from 'styled-components';

const DashboardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #bdc1c6;
  width: 100%;
  padding: 20px 40px 20px 40px;
  font-size: 30px;
  font-weight: 600;
  height: 100px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default DashboardHeaderWrapper;
