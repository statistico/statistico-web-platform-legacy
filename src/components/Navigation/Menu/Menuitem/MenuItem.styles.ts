import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItemWrapper = styled(NavLink)<{
  open: boolean;
  selected: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  cursor: pointer;
  width: 100%;
  padding: ${(props) => (props.open ? '0 20px 0 20px' : '0')};
  justify-content: ${(props) => (props.open ? '' : 'center')};
  text-decoration: none;
  color: ${(props) => (props.selected ? '#22ccde' : '#dedcdc')};
  background-color: ${(props) => (props.selected ? '#20242a' : '')};

  svg {
    path {
      fill: ${(props) => (props.selected ? '#22ccde' : '#dedcdc')};
    }
  }

  &:hover {
    color: #22ccde;
    
    svg {
      path {
        fill: #22ccde;
    }
  }
`;

export const IconWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.open ? 'flex-start' : 'center')};
  padding: ${(props) => (props.open ? '15px 0 15px 25px' : '0')};
  width: ${(props) => (props.open ? '25%' : '100%')};

  @media (max-width: 768px) {
    width: 30%;
    justify-content: flex-end;
    padding: 15px 0 15px 30px;
  }
`;

export const Title = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  align-content: center;
  padding: 15px 25px 15px 15px;
  width: 100%;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 60%;
    padding-left: 20px;
  }
`;
