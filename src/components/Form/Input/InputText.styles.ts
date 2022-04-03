import styled from 'styled-components';

export const InputTextContainer = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 15px;
  margin: 5px;
  width: 100%;
  border-radius: 15px;
  background: rgba(196, 196, 196, 0.4);
  backdrop-filter: blur(3px);
  border: ${(props) => (props.selected ? '2px solid #F1F1F1' : 'none')};
`;

export const InputTextIcon = styled.div<{ selected: boolean }>`
  svg {
    color: ${(props) => (props.selected ? '#F1F1F1' : 'black')};
  }
`;

const InputTextElement = styled.input<{ selected: boolean }>`
  appearance: none;
  width: 100%;
  border: none;
  font-size: 18px;
  margin: 5px 15px;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#F1F1F1' : 'black')};

  :focus {
    outline: none;
  }
`;

export default InputTextElement;
