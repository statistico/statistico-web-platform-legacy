import React from 'react';
import { number, shape, string } from 'prop-types';

import ResultFilterListWrapper from './ResultFilterListWrapper';

const ResultFilterList = (props) => {
  const { filter, index } = props;

  return (
    <ResultFilterListWrapper>
      <p>{index + 1}</p>
      <p>{filter.team}</p>
      <p>{filter.result}</p>
      <p>{filter.games}</p>
      <p>{filter.venue}</p>
    </ResultFilterListWrapper>
  );
};

ResultFilterList.propTypes = {
  index: number.isRequired,
  filter: shape({
    team: string.isRequired,
    result: string.isRequired,
    games: string.isRequired,
    venue: string.isRequired,
  }).isRequired,
};

export default ResultFilterList;
