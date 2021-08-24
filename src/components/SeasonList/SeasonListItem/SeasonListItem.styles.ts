import styled from 'styled-components';

const SeasonListItemWrapper = styled.p<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 15px;
  width: 100%;
  font-size: 24px;
  color: #22ccde;
  background-color: ${(props) => (props.isSelected ? '#31363e' : '')};
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #31363e;
  }
`;

export default SeasonListItemWrapper;
