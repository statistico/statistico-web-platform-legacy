import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BrandWrapper = styled(NavLink)<{ open: boolean }>`
  padding: 30px 10px;
  margin-top: 20px;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.open ? 'space-between' : 'center')};
  cursor: pointer;
`;

export const LogoIcon = styled.img<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 50px;
  height: 45px;
  margin: ${(props) => (props.open ? '0 10px 5px 20px' : '0 10px 5px 10px')};
`;

export const LogoText = styled.img<{ open: boolean }>`
  height: 18px;
  max-width: 160px;
  margin: 0 15px 10px 0;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  padding-right: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;
