import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56;
  cursor: pointer;
  width: 100%;
  padding: 0 32px 0 52px;

  &:hover {
    color: #22ccde;
    font-weight: 600;
  }
`;

export default MenuItemWrapper;
