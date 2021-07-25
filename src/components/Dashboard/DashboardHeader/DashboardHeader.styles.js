import styled from 'styled-components';

const DashboardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: hsla(0, 0%, 100%, 0.55);
  width: 100%;
  padding: 20px 0 20px 40px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
  font-size: 30px;
  font-weight: 600;
  height: 100px;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 5px;
    height: 60px;
    font-size: 24px;
  }
`;

export default DashboardHeaderWrapper;
