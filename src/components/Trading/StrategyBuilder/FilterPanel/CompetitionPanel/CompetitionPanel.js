import React from 'react';

import Checkbox from '../../../../Checkbox/Checkbox';
import {
  CheckboxWrapper,
  CompetitionPanelWrapper,
  FilterWrapper,
} from './CompetitionPanelWrapper';
import PanelTitle from '../PanelTitle/PanelTitle';

import competitions from '../../../../../config/competitions';

const CompetitionPanel = () => {
  return (
    <CompetitionPanelWrapper>
      <PanelTitle title="Competitions" />
      <FilterWrapper>
        {competitions.map((item) => (
          <CheckboxWrapper key={item.name}>
            <Checkbox
              name={item.name}
              label={item.label}
              checked={false}
              onChange={() => {}}
            />
          </CheckboxWrapper>
        ))}
      </FilterWrapper>
    </CompetitionPanelWrapper>
  );
};

export default CompetitionPanel;
