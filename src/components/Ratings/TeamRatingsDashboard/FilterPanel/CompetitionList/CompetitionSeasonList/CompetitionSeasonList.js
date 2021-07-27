import React from 'react';
import { number, string } from 'prop-types';

import CompetitionSeasonListWrapper from './CompetitionSeasonList.styles';

const CompetitionSeasonList = (props) => {
  const { id, name } = props;

  if (id === null) {
    return null;
  }

  return (
    <CompetitionSeasonListWrapper>
      <img
        alt={name}
        src={`https://cdn.sportmonks.com/images/soccer/leagues/${id}.png`}
      />
    </CompetitionSeasonListWrapper>
  );
};

CompetitionSeasonList.propTypes = {
  id: number,
  name: string,
};

CompetitionSeasonList.defaultProps = {
  id: null,
  name: null,
};

export default CompetitionSeasonList;
