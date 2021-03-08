import styled from 'styled-components';

const TradeGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 15px 10px 15px 10px;
  border-radius: 10px;
  width: 68%;
  background-color: #1b1e22;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  height: 350px;

  @media (max-width: 768px) {
    width: 98%;
    height: 300px;
    padding: 10px 0 0 0;
  }
`;

export default TradeGraphWrapper;
