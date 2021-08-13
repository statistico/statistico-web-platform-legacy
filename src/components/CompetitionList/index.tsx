import React from 'react';

import CompetitionListWrapper from './CompetitionList.styles';
import CompetitionListItem from './CompetitionListItem';
import competitions from '../../config/competitions';

type CompetitionListProps = {
  selectedId?: string | null;
  toggle: (id: string | null) => void;
};

const CompetitionList = (props: CompetitionListProps): JSX.Element => {
  const { selectedId, toggle } = props;

  return (
    <CompetitionListWrapper>
      {competitions.map((c) => {
        return (
          <CompetitionListItem
            id={c.id}
            name={c.name}
            key={c.id}
            selectedId={selectedId}
            toggle={toggle}
          />
        );
      })}
    </CompetitionListWrapper>
  );
};

export default CompetitionList;
