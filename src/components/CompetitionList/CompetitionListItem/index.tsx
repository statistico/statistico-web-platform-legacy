import React from 'react';

import CompetitionListItemWrapper from './CompetitionListItem.styles';

type CompetitionListItemProps = {
  id: string;
  name: string;
  selectedId?: string | null;
  toggle: (id: string | null) => void;
};

const CompetitionListItem = (props: CompetitionListItemProps): JSX.Element => {
  const { id, name, selectedId, toggle } = props;

  return (
    <CompetitionListItemWrapper
      onClick={() => toggle(selectedId === id ? null : id)}
    >
      <img
        alt={name}
        src={`https://cdn.sportmonks.com/images/soccer/leagues/${id}.png`}
      />
    </CompetitionListItemWrapper>
  );
};

export default CompetitionListItem;
