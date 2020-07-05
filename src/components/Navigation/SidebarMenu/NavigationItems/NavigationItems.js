import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem>Fixture Search</NavigationItem>
    <NavigationItem>Shortlist</NavigationItem>
    <NavigationItem>League Stats</NavigationItem>
    <NavigationItem>Team Stats</NavigationItem>
    <NavigationItem>Player Stats</NavigationItem>
    <NavigationItem>Trends</NavigationItem>
  </ul>
);

export default navigationItems;
