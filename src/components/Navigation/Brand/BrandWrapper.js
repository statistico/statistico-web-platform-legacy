import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BrandWrapper = styled(NavLink)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding-top: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

export default BrandWrapper;
