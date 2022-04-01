import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: none;
  background: rgba(34, 204, 222, 0.5);
  backdrop-filter: blur(5px);
  color: #f1f1f1;
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 15px;
  cursor: pointer;
  border-radius: 15px;

  &:hover {
    background: rgba(34, 204, 222, 0.8);
  }
`;

export default ButtonWrapper;
