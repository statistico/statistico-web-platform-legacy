import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BrandWrapper = styled(NavLink)`
  padding: 10px 0 10px 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default BrandWrapper;
