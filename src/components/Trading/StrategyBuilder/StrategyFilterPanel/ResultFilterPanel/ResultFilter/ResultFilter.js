import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import ResultFilterWrapper from './ResultFilterWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';
import { games, result, team, venue } from '../../../../../../config/filters';
import selectStyles from '../../../../../../config/form-styles';

const SubmitButton = styled.button`
  margin: 20px 0 20px 0;
  cursor: pointer;
`;

const ResultFilter = (props) => {
  const { addFilter } = props;
  const [filter, setFilter] = useState({
    team: team[0],
    result: result[0],
    games: games[0],
    venue: venue[0],
  });

  const isDisabled = () => {
    return !filter.team || !filter.result || !filter.games || !filter.venue;
  };

  const updateFilter = useCallback(
    (i, title) => {
      if (title === 'Games') {
        setFilter({ ...filter, games: i });
      }

      if (title === 'Result') {
        setFilter({ ...filter, result: i });
      }

      if (title === 'Team') {
        setFilter({ ...filter, team: i });
      }

      if (title === 'Venue') {
        setFilter({ ...filter, venue: i });
      }
    },
    [filter]
  );

  const submit = () => {
    addFilter({
      team: filter.team.label,
      result: filter.result.label,
      games: filter.games.label,
      venue: filter.venue.label,
    });
  };

  return (
    <ResultFilterWrapper>
      <SingleFilter
        selection={filter.team}
        selections={team}
        styles={selectStyles}
        title="Team"
        toggleSelection={(i) => updateFilter(i, 'Team')}
      />
      <SingleFilter
        selection={filter.result}
        selections={result}
        styles={selectStyles}
        title="Result"
        toggleSelection={(i) => updateFilter(i, 'Result')}
      />
      <SingleFilter
        selection={filter.games}
        selections={games}
        styles={selectStyles}
        title="Games"
        toggleSelection={(i) => updateFilter(i, 'Games')}
      />
      <SingleFilter
        selection={filter.venue}
        selections={venue}
        styles={selectStyles}
        title="Venue"
        toggleSelection={(i) => updateFilter(i, 'Venue')}
      />
      <SubmitButton disabled={isDisabled()} onClick={submit}>
        Submit
      </SubmitButton>
    </ResultFilterWrapper>
  );
};

ResultFilter.propTypes = {
  addFilter: func.isRequired,
};

export default ResultFilter;
