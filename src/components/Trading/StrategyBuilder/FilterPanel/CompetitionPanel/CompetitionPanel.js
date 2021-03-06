import React from 'react';

import Checkbox from '../../../../Checkbox/Checkbox';
import {
  CheckboxWrapper,
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
          <CheckboxWrapper key={item.name}>
            <Checkbox
              country={item.country}
              name={item.name}
              label={item.label}
              checked={false}
              onChange={() => {}}
            />
          </CheckboxWrapper>
        ))}
      </CompetitionListWrapper>
    </CompetitionPanelWrapper>
  );
};

export default CompetitionPanel;
