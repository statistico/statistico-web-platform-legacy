import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItemWrapper = styled(NavLink)`
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

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 0 5px 10px;
  width: 15%;

  @media (max-width: 768px) {
    width: 40%;
    justify-content: flex-end;
  }
`;

export const Title = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  padding: 15px 30px 5px 20px;
  width: 70%;

  @media (max-width: 768px) {
    width: 60%;
  }
`;
