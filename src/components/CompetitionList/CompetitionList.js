import React from 'react';

import CompetitionListWrapper from './CompetitionList.styles';
import CompetitionListItem from './CompetitionListItem/CompetitionListItem';
import competitions from '../../config/competitions';

const CompetitionList = () => {
  return (
    <CompetitionListWrapper>
      {competitions.map((c) => {
        return <CompetitionListItem id={c.id} name={c.name} key={c.id} />;
      })}
    </CompetitionListWrapper>
  );
};

export default CompetitionList;
