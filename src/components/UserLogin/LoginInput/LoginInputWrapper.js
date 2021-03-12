import styled from 'styled-components';

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 10px 0;
  width: 400px;
  border-radius: 10px;
`;

export const LoginInputIcon = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  background-color: #dedcdc;
  color: #23262b;
  height: 100%;
  align-items: center;
`;

export const LoginInputText = styled.input`
  width: 80%;
  border: none;
  background-color: #ffffff;
  font-size: 16px;
  padding: 10px;
`;
