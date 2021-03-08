import styled from 'styled-components';

const TradePanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  color: #ccc;
  padding: 20px 0 20px 0;
  margin: 20px 0 20px 0;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export default TradePanelWrapper;
