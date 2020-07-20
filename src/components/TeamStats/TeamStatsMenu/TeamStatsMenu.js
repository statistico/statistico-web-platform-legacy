import React from 'react';

const teamStatsMenu = (props) => {
  const options = [
    'MATCHES',
    'MATCH STATS',
    'PLAYERS',
    'PLAYER STATS',
    'TIMELINES',
  ];

  return (
    <ul>
      {options.map((option) => {
        return <li>{option}</li>;
      })}
    </ul>
  );
};

export default teamStatsMenu;
