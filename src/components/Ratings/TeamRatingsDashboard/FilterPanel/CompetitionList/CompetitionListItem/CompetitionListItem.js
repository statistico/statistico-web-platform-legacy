import React from 'react';
import { func, number, string } from 'prop-types';
import CompetitionListItemWrapper from './CompetitionListItem.styles';

const CompetitionListItem = (props) => {
  const { id, name, selectedId, toggle } = props;

  return (
    <CompetitionListItemWrapper
      onClick={() => toggle(selectedId === id ? null : id)}
      selected={selectedId}
    >
      <img
        alt={name}
        src={`https://cdn.sportmonks.com/images/soccer/leagues/${id}.png`}
      />
    </CompetitionListItemWrapper>
  );
};

CompetitionListItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  selectedId: number,
  toggle: func.isRequired,
};

CompetitionListItem.defaultProps = {
  selectedId: null,
};

export default CompetitionListItem;
