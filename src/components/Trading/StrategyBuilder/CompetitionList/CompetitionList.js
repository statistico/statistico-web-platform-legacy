import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import CompetitionListWrapper from './CompetitionListWrapper';
import CompetitionRow from './CompetitionRow/CompetitionRow';
import competitions from '../../../../config/competitions';
import CompetitionListHeader from './CompetitionListHeader/CompetitionListHeader';
import { filterByCompetition } from '../../../../utility/trade';

const CompetitionList = (props) => {
  const { trades } = props;

  return (
    <CompetitionListWrapper>
      <CompetitionListHeader />
      {competitions.map((competition) => {
        return (
          <CompetitionRow
            competition={competition}
            trades={filterByCompetition(trades, parseInt(competition.name, 10))}
            className="competition-row"
            key={competition.name}
          />
        );
      })}
    </CompetitionListWrapper>
  );
};

CompetitionList.propTypes = {
  trades: arrayOf(
    shape({
      competitionId: number.isRequired,
      result: string.isRequired,
      runnerPrice: number.isRequired,
    })
  ).isRequired,
};

export default CompetitionList;
