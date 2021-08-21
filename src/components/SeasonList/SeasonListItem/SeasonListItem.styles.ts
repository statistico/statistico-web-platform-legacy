import styled from 'styled-components';

const SeasonListItemWrapper = styled.p<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  width: 100%;
  font-size: 24px;
  color: #22ccde;
  background-color: ${(props) => (props.isSelected ? '#31363e' : '')};
`;

export default SeasonListItemWrapper;
