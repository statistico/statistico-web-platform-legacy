import React from 'react';

import { Team } from '../../types/entity';
import StyledSelect from './TeamSelect.styles';

type TeamSelectProps = {
  onSelect: (id: number | null) => void;
  teams: Team[];
};

const TeamSelect = (props: TeamSelectProps): JSX.Element => {
  const { onSelect, teams } = props;

  const noDataRenderer = () => {
    return <div>No teams match search</div>;
  };

  const onChange = (values: any[]): void => {
    if (values.length === 1) {
      onSelect(values[0].id);
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
      clearable
      searchBy="name"
      sortBy="name"
      labelField="name"
      valueField="id"
      closeOnScroll
      closeOnSelect
      clearOnSelect
      style={{
        borderRadius: '10px',
        boxShadow: '0 0 5px rgb(34 204 222 / 80%)',
      }}
      noDataRenderer={noDataRenderer}
      dropdownGap={0}
      autoFocus
    />
  );
};

export default TeamSelect;
