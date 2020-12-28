import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: '80%',
    textAlign: 'center',
    margin: '0 0 10px 0',
    padding: '10px 0 10px 0',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'center',
    color: '#22ccde',
  }),

  singleValue: (provided) => ({
    ...provided,
    fontWeight: 'bold',
    paddingLeft: '30px',
  }),
};

const options = [
  {
    id: 0,
    name: 'MATCHES',
  },
  {
    id: 1,
    name: 'PLAYERS',
  },
  {
    id: 2,
    name: 'STATS FILTER',
  },
  {
    id: 3,
    name: 'STATS OVERVIEW',
  },
  {
    id: 4,
    name: 'TIMELINES',
  },
];

const TeamSideBar = () => {
  return <Aux>Replace me</Aux>;
};

export default TeamSideBar;
