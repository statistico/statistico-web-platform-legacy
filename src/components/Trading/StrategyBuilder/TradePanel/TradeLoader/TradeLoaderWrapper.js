import styled from 'styled-components';

const TradeLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #22ccde;
  margin-right: 200px;
  margin-top: 150px;
  font-size: 30px;

  p {
    text-align: center;
    margin: 120px 0 0 100px;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 100px;
    margin-top: 75px;

    p {
      margin: 100px 0 0 80px;
    }
  }
`;

export default TradeLoaderWrapper;
