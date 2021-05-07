import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SubMenuItemWrapper = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  padding: 8px 0 8px 70px;
  font-size: 16px;
  text-decoration: none;
  color: #dedcdc;
  width: 100%;

  &:hover {
    color: #22ccde;
  }

  @media (max-width: 768px) {
    padding-left: 130px;
  }
`;

export default SubMenuItemWrapper;
