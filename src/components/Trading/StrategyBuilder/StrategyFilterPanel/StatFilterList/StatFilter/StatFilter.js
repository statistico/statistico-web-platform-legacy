import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import StatFilterWrapper from './StatFilterWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';
import {
  action,
  games,
  measure,
  metric,
  stats,
  team,
  venue,
} from '../../../../../../config/filters';
import odds from '../../../../../../config/odds';
import selectStyles from '../../../../../../config/form-styles';

const SubmitButton = styled.button`
  margin: 20px 0 20px 0;
  cursor: pointer;
  font-size: 14px;
`;

const StatFilter = (props) => {
  const { addFilter } = props;
  const [filter, setFilter] = useState({
    stat: stats[0],
    team: team[0],
    action: action[0],
    measure: measure[0],
    metric: metric[0],
    games: games[0],
    venue: venue[0],
    value: odds[0],
  });

  const isDisabled = () => {
    return (
      !filter.stat ||
      !filter.team ||
      !filter.games ||
      !filter.venue ||
      !filter.action ||
      !filter.measure ||
      !filter.metric ||
      !filter.value
    );
  };

  const updateFilter = useCallback(
    (i, title) => {
      if (title === 'Stat') {
        setFilter({ ...filter, stat: i });
      }
      if (title === 'Team') {
        setFilter({ ...filter, team: i });
      }

      if (title === 'Action') {
        setFilter({ ...filter, action: i });
      }

      if (title === 'Measure') {
        setFilter({ ...filter, measure: i });
      }

      if (title === 'Metric') {
        setFilter({ ...filter, metric: i });
      }

      if (title === 'Games') {
        setFilter({ ...filter, games: i });
      }

      if (title === 'Venue') {
        setFilter({ ...filter, venue: i });
      }

      if (title === 'Value') {
        setFilter({ ...filter, value: i });
      }
    },
    [filter]
  );

  const submit = () => {
    addFilter({
      stat: filter.stat.label,
      team: filter.team.label,
      action: filter.action.label,
      measure: filter.measure.label,
      metric: filter.metric.label,
      games: filter.games.label,
      venue: filter.venue.label,
      value: filter.value.label,
    });
  };

  return (
    <StatFilterWrapper>
      <SingleFilter
        selection={filter.team}
        selections={team}
        styles={selectStyles}
        title="Team"
        toggleSelection={(i) => updateFilter(i, 'Team')}
      />
      <SingleFilter
        selection={filter.stat}
        selections={stats}
        styles={selectStyles}
        title="Stat"
        toggleSelection={(i) => updateFilter(i, 'Stat')}
      />
      <SingleFilter
        selection={filter.venue}
        selections={venue}
        styles={selectStyles}
        title="Venue"
        toggleSelection={(i) => updateFilter(i, 'Venue')}
      />
      <SingleFilter
        selection={filter.action}
        selections={action}
        styles={selectStyles}
        title="Action"
        toggleSelection={(i) => updateFilter(i, 'Action')}
      />
      <SingleFilter
        selection={filter.measure}
        selections={measure}
        styles={selectStyles}
        title="Measure"
        toggleSelection={(i) => updateFilter(i, 'Measure')}
      />
      <SingleFilter
        selection={filter.metric}
        selections={metric}
        styles={selectStyles}
        title="Metric"
        toggleSelection={(i) => updateFilter(i, 'Metric')}
      />
      <SingleFilter
        selection={filter.value}
        selections={odds}
        styles={selectStyles}
        title="Value"
        toggleSelection={(i) => updateFilter(i, 'Value')}
      />
      <SingleFilter
        selection={filter.games}
        selections={games}
        styles={selectStyles}
        title="Games"
        toggleSelection={(i) => updateFilter(i, 'Games')}
      />
      <SubmitButton disabled={isDisabled()} onClick={submit}>
        Submit
      </SubmitButton>
    </StatFilterWrapper>
  );
};

StatFilter.propTypes = {
  addFilter: func.isRequired,
};

export default StatFilter;
