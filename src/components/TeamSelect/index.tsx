import React from 'react';

import { Team } from '../../types/entity';
import StyledSelect from './TeamSelect.styles';
import useFetchesCompetitionTeams from '../../hooks/useFetchesCompetitionTeams';

type TeamSelectProps = {
  onSelect: (id: Team | null) => void;
};

const TeamSelect = (props: TeamSelectProps): JSX.Element => {
  const { onSelect } = props;
  const { teams, loading } = useFetchesCompetitionTeams();

  const onChange = (values: any[]): void => {
    if (values.length === 1) {
      onSelect(values[0]);
      return;
    }

    onSelect(null);
  };

  return (
    <StyledSelect
      values={[]}
      options={teams}
      onChange={(values) => onChange(values)}
      placeholder="Select a team"
      searchable={false}
      searchBy="name"
      sortBy="name"
      labelField="name"
      valueField="id"
      closeOnScroll
      closeOnSelect
      clearOnSelect
      style={{
        border: 'none',
        boxShadow: 'none',
      }}
      dropdownGap={0}
      autoFocus
      loading={loading}
      backspaceDelete={false}
    />
  );
};

export default TeamSelect;
