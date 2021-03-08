import styled from 'styled-components';

const TradeStatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1e22;
  font-size: 32px;
  color: #ccc;
  margin: 10px;
  padding: 30px;
  width: 19%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export default TradeStatWrapper;
