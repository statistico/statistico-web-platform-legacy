import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-top: ${(props) => props.marginTop};
  padding: 10px;
  cursor: pointer;
`;

export default Button;
