import styled from 'styled-components';

const StrategyBuilderStatsWrapper = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
`;

export default StrategyBuilderStatsWrapper;
