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
  padding: ${(props) => (props.open ? '0 20px 0 30px' : '0')};
  justify-content: ${(props) => (props.open ? '' : 'center')};
  text-decoration: none;
  color: ${(props) => (props.selected ? '#22ccde' : '#dedcdc')};
  background-color: ${(props) => (props.selected ? '#31363e' : '')};

  svg {
    path {
      fill: ${(props) => (props.selected ? '#22ccde' : '#dedcdc')};
    }
  }

  &:hover {
    color: #22ccde;
    background-color: #31363e;
    
    svg {
      path {
        fill: #22ccde;
    }
  }
`;

export const IconWrapper = styled.div<{ open: boolean; selected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 5px;
  width: ${(props) => (props.open ? '25%' : '60%')};

  svg {
    path {
      fill: ${(props) => (props.selected ? '#22ccde' : '#dedcdc')};
    }
  }

  @media (max-width: 768px) {
    width: 20%;
  }
`;

export const Title = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  align-content: center;
  padding: 15px 0 15px 15px;
  width: 100%;
  font-size: 18px;

  @media (max-width: 768px) {
    width: 60%;
    padding-left: 20px;
  }
`;
