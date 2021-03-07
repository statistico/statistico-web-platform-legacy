import React from 'react';

import CompetitionCheckbox from './CompetitionCheckbox/CompetitionCheckbox';
import {
  CompetitionListWrapper,
  CompetitionPanelWrapper,
} from './CompetitionPanelWrapper';
import PanelTitle from '../PanelTitle/PanelTitle';

import competitions from '../../../../../config/competitions';

const CompetitionPanel = () => {
  return (
    <CompetitionPanelWrapper>
      <PanelTitle title="Competitions" />
      <CompetitionListWrapper>
        {competitions.map((item) => (
          <CompetitionCheckbox
            country={item.country}
            name={item.name}
            label={item.label}
            checked={false}
            onChange={() => {}}
            key={item.name}
          />
        ))}
      </CompetitionListWrapper>
    </CompetitionPanelWrapper>
  );
};

export default CompetitionPanel;
