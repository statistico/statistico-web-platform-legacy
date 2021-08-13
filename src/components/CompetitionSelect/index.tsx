import React from 'react';

import CompetitionList from '../CompetitionList';
import CompetitionSelectWrapper from './CompetitionSelect.styles';

type CompetitionSelectProps = {
  selectedId?: string | null;
  toggle: (id: string | null) => void;
};

const CompetitionSelect = (props: CompetitionSelectProps): JSX.Element => {
  const { selectedId, toggle } = props;

  return (
    <CompetitionSelectWrapper>
      <p>Select a competition</p>
      <CompetitionList toggle={toggle} selectedId={selectedId} />
    </CompetitionSelectWrapper>
  );
};

export default CompetitionSelect;
