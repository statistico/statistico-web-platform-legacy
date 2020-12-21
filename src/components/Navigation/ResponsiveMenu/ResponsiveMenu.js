import React from 'react';
import styled from 'styled-components';

import ResponsiveMenuWrapper from './ResponsiveMenuWrapper';

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.2rem;
    line-height: 2;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #22ccde;
    }
  }
`;

const ResponsiveMenu = () => {
  return (
    <ResponsiveMenuWrapper>
      <NavLinks>
        <a href="/">Trading</a>
        <a href="/">Stats</a>
        <a href="/">Blog</a>
        <a href="/">My Account</a>
      </NavLinks>
    </ResponsiveMenuWrapper>
  );
};

export default ResponsiveMenu;
