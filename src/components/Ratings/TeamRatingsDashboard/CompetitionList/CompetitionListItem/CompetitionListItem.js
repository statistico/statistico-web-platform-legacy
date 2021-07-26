import React from 'react';
import { string } from 'prop-types';
import CompetitionListItemWrapper from './CompetitionListItem.styles';

const CompetitionListItem = (props) => {
  const { id, name } = props;

  return (
    <CompetitionListItemWrapper>
      <img
        alt={name}
        src={`https://cdn.sportmonks.com/images/soccer/leagues/${id}.png`}
      />
    </CompetitionListItemWrapper>
  );
};

CompetitionListItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

export default CompetitionListItem;
