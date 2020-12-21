import React from 'react';
import styled from 'styled-components';

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 10px 0 auto;

  & a {
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #22ccde;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const navLinks = () => {
  return (
    <NavLinks>
      <a href="/">Trading</a>
      <a href="/">Stats</a>
      <a href="/">Blog</a>
    </NavLinks>
  );
};

export default navLinks;
