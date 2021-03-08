import styled from 'styled-components';

const TradeStatPanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default TradeStatPanelWrapper;
