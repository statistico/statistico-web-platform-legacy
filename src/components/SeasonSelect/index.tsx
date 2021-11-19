import React from 'react';

import StyledSelect from './SeasonSelect.styles';
import { Season } from '../../types/entity';
import useFetchesTeamSeasons from '../../hooks/useFetchesTeamSeasons';

type SeasonSelectProps = {
  onSelect: (id: Season | null) => void;
  teamId: number;
};

const SeasonSelect = (props: SeasonSelectProps): JSX.Element => {
  const { onSelect, teamId } = props;
  const { seasons, loading } = useFetchesTeamSeasons(
    teamId,
    false,
    'name_desc'
  );

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
      options={seasons}
      onChange={(values) => onChange(values)}
      placeholder="Select a season"
      searchable={false}
      clearable
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

export default SeasonSelect;
