import React, { useContext, useEffect, useState } from 'react';

import CompetitionCheckbox from './CompetitionCheckbox/CompetitionCheckbox';
import {
  CompetitionListWrapper,
  CompetitionPanelWrapper,
} from './CompetitionPanelWrapper';
import PanelTitle from '../PanelTitle/PanelTitle';
import CompetitionToggle from './CompetitionToggle/CompetitionToggle';
import {
  StrategyBuilderActionContext,
  StrategyBuilderContext,
} from '../../../../../context/StrategyBuilderContext';

import competitions from '../../../../../config/competitions';

const CompetitionPanel = () => {
  const { filters } = useContext(StrategyBuilderContext);
  const { setFilters } = useContext(StrategyBuilderActionContext);
  const [selections, updateSelections] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    updateSelections(competitions.map((obj) => ({ ...obj, checked: false })));
  }, []);

  const updateFilters = (comps) => {
    setFilters({
      ...filters,
      competitions: comps.filter((c) => c.checked).map((c) => c.id),
    });
  };

  const clickCompetition = (id) => {
    const competition = selections.find((s) => s.id === id);
    const remaining = selections.filter((s) => s.id !== id);

    const newSelections = [
      ...remaining,
      {
        ...competition,
        checked: !competition.checked,
      },
    ].sort((a, b) => a.country.localeCompare(b.country) || a.id - b.id);

    updateSelections(newSelections);

    updateFilters(newSelections);
    setAllChecked(false);
  };

  const selectAll = (s) => {
    const comps = selections.map((obj) => ({ ...obj, checked: !s }));

    updateSelections(comps);
    setAllChecked(!s);

    updateFilters(comps);
  };

  return (
    <CompetitionPanelWrapper>
      <PanelTitle title="Competitions">
        <CompetitionToggle
          checked={allChecked}
          onChange={() => selectAll(allChecked)}
        />
      </PanelTitle>
      <CompetitionListWrapper>
        {selections.map((item) => (
          <CompetitionCheckbox
            country={item.country}
            name={item.name}
            id={item.id}
            checked={item.checked}
            onChange={() => clickCompetition(item.id)}
            key={item.name}
          />
        ))}
      </CompetitionListWrapper>
    </CompetitionPanelWrapper>
  );
};

export default CompetitionPanel;
