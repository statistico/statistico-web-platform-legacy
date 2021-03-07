import styled from 'styled-components';

const MarketRunnerSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5px;
  }
`;

export default MarketRunnerSelectWrapper;
