import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dedcdc;
  height: 100vh;
  max-width: 100vw;
  text-align: center;
  background-color: #23262b;
`;

export const UserLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #1b1e22;
  border-radius: 10px;
  color: #dedcdc;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  top: 0;
  left: 0;
`;

export const LoginButton = styled.button`
  border: none;
  background-color: #dedcdc;
  color: #23262b;
  font-size: 20px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const LogoIcon = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 75px;
  margin: 10px 0 10px 0;
  width: 100%;
`;

export const LogoText = styled.img`
  height: 30px;
  max-width: 200px;
  margin-bottom: 20px;
`;
