import styled from 'styled-components';

const WinLossChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px 10px 10px;
  margin: 15px 10px 15px 10px;
  border-radius: 10px;
  width: 28%;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: 350px;

  @media (max-width: 768px) {
    width: 98%;
    height: 300px;
  }
`;

export default WinLossChartWrapper;
