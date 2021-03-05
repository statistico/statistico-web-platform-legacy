import React, { useContext } from 'react';

import CompetitionListWrapper from './CompetitionListWrapper';
import CompetitionRow from './CompetitionRow/CompetitionRow';
import competitions from '../../../../config/competitions';
import CompetitionListHeader from './CompetitionListHeader/CompetitionListHeader';
import { filterByCompetition } from '../../../../utility/trade';
import { StrategyBuilderContext } from '../../../../context/StrategyBuilderContext';

const CompetitionList = () => {
  const { tr } = useContext(StrategyBuilderContext);

  return (
    <CompetitionListWrapper>
      <CompetitionListHeader />
      {competitions.map((competition) => {
        return (
          <CompetitionRow
            competition={competition}
            trades={filterByCompetition(tr, parseInt(competition.name, 10))}
            className="competition-row"
            key={competition.name}
          />
        );
      })}
    </CompetitionListWrapper>
  );
};

export default CompetitionList;
