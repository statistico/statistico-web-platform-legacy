import React from 'react';

import FixtureListWrapper from './ResultList.styles';
import ResultListItem from './ResultListItem';

const ResultList = (): JSX.Element => {
  const results = [
    {
      id: 3,
      homeTeam: {
        id: 1,
        name: 'West Ham',
        logo: null,
      },
      awayTeam: {
        id: 2,
        name: 'Tottenham',
        logo: null,
      },
      homeGoals: 2,
      awayGoals: 4,
      date: new Date(1630093305 * 1000),
    },
    {
      id: 2,
      homeTeam: {
        id: 1,
        name: 'West Ham',
        logo: null,
      },
      awayTeam: {
        id: 3,
        name: 'Arsenal',
        logo: null,
      },
      homeGoals: 2,
      awayGoals: 4,
      date: new Date(1640096910 * 1000),
    },
    {
      id: 1,
      homeTeam: {
        id: 5,
        name: 'Chelsea',
        logo: null,
      },
      awayTeam: {
        id: 1,
        name: 'West Ham',
        logo: null,
      },
      homeGoals: 2,
      awayGoals: 4,
      date: new Date(1650096910 * 1000),
    },
  ];

  return (
    <FixtureListWrapper>
      {results.map((r) => (
        <ResultListItem teamId={1} result={r} />
      ))}
    </FixtureListWrapper>
  );
};

export default ResultList;
