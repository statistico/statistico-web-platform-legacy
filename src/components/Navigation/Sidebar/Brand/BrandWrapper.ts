import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BrandWrapper = styled(NavLink)`
  padding: 35px 10px 20px 10px;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoIcon = styled.img<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 50px;
  margin: ${(props) => (props.open ? '0 10px 15px 10px' : '0 10px 50px 10px')};
`;

export const LogoText = styled.img<{ open: boolean }>`
  height: 25px;
  max-width: 200px;
  margin: 0 5px 10px 5px;
  display: ${(props) => (props.open ? 'flex' : 'none')};

  @media (max-width: 768px) {
    display: none;
  }
`;
