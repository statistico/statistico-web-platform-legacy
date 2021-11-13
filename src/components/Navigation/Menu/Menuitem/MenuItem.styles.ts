import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItemWrapper = styled(NavLink)<{
  selected: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  color: ${(props) => (props.selected ? '#22ccde' : '#dedcdc')};
  background-color: ${(props) => (props.selected ? '#31363e' : '')};
  padding: 10px;

  @media (min-width: 768px) {
    height: 80px;
    margin: 5px 0;

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
  }

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

export const IconWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (min-width: 768px) {
    width: 100%;
    height: 60px;
  }

  svg {
    path {
      fill: ${(props) => (props.selected ? '#22ccde' : '#dedcdc')};
    }
  }
`;

export const Title = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    font-weight: 500;
  }
`;
