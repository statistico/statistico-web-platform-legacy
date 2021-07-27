import styled from 'styled-components';

const DashboardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #d1d6dd;
  width: ${(props) => props.width};
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
