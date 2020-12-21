import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  background-color: #181831;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 769px) {
    height: 60px;
  }
`;

export default NavBarWrapper;
