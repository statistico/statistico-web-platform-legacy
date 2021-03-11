import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuItemWrapper = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  cursor: pointer;
  width: 100%;
  padding: ${(props) => (props.open ? '0 32px 0 42px' : '0')};
  justify-content: ${(props) => (props.open ? '' : 'center')};
  text-decoration: none;
  color: #dedcdc;

  &:hover {
    color: #22ccde;
  }
`;

export default MenuItemWrapper;
