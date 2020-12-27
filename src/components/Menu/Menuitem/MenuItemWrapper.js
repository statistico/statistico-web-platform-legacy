import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56;
  cursor: pointer;
  padding-left: 32px;
  padding-right: 32px;

  &:hover {
    color: #22ccde;
  }
`;

export default MenuItemWrapper;
