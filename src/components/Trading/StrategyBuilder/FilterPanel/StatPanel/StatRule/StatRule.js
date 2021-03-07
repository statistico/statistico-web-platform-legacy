import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import { StatRuleRow, StatRuleWrapper } from './StatRuleWrapper';
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
  background-color: #23262b;
  padding: 10px 25px 10px 25px;
  color: #ffffff;
  border-radius: 10px;
`;

const StatRule = (props) => {
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
      stat: filter.stat,
      team: filter.team,
      action: filter.action,
      measure: filter.measure,
      metric: filter.metric,
      games: filter.games,
      venue: filter.venue,
      value: filter.value,
    });
  };

  return (
    <StatRuleWrapper>
      <StatRuleRow>
        <SingleFilter
          selection={filter.team}
          selections={team}
          styles={selectStyles}
          title="Team"
          toggleSelection={(i) => updateFilter(i, 'Team')}
        />
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={filter.stat}
          selections={stats}
          styles={selectStyles}
          title="Stat"
          toggleSelection={(i) => updateFilter(i, 'Stat')}
        />
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={filter.venue}
          selections={venue}
          styles={selectStyles}
          title="Venue"
          toggleSelection={(i) => updateFilter(i, 'Venue')}
        />
      </StatRuleRow>
      <StatRuleRow>
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
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={filter.metric}
          selections={metric}
          styles={selectStyles}
          title="Metric"
          toggleSelection={(i) => updateFilter(i, 'Metric')}
        />
      </StatRuleRow>
      <StatRuleRow>
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
      </StatRuleRow>
      <SubmitButton disabled={isDisabled()} onClick={submit}>
        Add
      </SubmitButton>
    </StatRuleWrapper>
  );
};

StatRule.propTypes = {
  addFilter: func.isRequired,
};

export default StatRule;
