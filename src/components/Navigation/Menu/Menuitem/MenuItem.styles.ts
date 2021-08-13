import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItemTypes = styled(NavLink)<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  cursor: pointer;
  width: 100%;
  padding: ${(props) => (props.open ? '0 20px 0 20px' : '0')};
  justify-content: ${(props) => (props.open ? '' : 'center')};
  text-decoration: none;
  color: #dedcdc;

  &:hover {
    color: #22ccde;
  }
`;

export const Icon = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${(props) =>
    props.open ? '15px 0 5px 10px' : '15px 40px 5px 10px'};
  width: 15%;

  @media (max-width: 768px) {
    width: 20%;
    justify-content: flex-end;
    padding: 15px 0 5px 0;
  }
`;

export const Title = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  padding: 15px 30px 5px 0;
  width: 70%;

  @media (max-width: 768px) {
    width: 60%;
    padding-left: 20px;
  }
`;
