import styled from 'styled-components';

const StrategyFilterPanelWrapper = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  font-size: 16px;
  margin: 20px 10px 20px 10px;
  color: #ccc;

  p {
    padding-bottom: 5px;
    font-weight: 600;
    font-size: 16px;
  }
`;

export default StrategyFilterPanelWrapper;
