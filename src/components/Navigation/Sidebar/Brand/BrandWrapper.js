import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BrandWrapper = styled(NavLink)`
  padding: 35px 10px 20px 10px;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default BrandWrapper;
