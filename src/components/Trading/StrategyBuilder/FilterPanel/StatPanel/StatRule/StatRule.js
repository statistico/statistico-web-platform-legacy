import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { func, shape, string } from 'prop-types';

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
  const { button, filter, method } = props;
  const [currentFilter, setCurrentFilter] = useState(
    filter ?? {
      stat: stats[0],
      team: team[0],
      action: action[0],
      measure: measure[0],
      metric: metric[0],
      games: games[0],
      venue: venue[0],
      value: odds[0],
    }
  );

  const isDisabled = () => {
    return (
      !currentFilter.stat ||
      !currentFilter.team ||
      !currentFilter.games ||
      !currentFilter.venue ||
      !currentFilter.action ||
      !currentFilter.measure ||
      !currentFilter.metric ||
      !currentFilter.value
    );
  };

  const updateFilter = useCallback(
    (i, title) => {
      if (title === 'Stat') {
        setCurrentFilter({ ...currentFilter, stat: i });
      }
      if (title === 'Team') {
        setCurrentFilter({ ...currentFilter, team: i });
      }

      if (title === 'Action') {
        setCurrentFilter({ ...currentFilter, action: i });
      }

      if (title === 'Measure') {
        setCurrentFilter({ ...currentFilter, measure: i });
      }

      if (title === 'Metric') {
        setCurrentFilter({ ...currentFilter, metric: i });
      }

      if (title === 'Games') {
        setCurrentFilter({ ...currentFilter, games: i });
      }

      if (title === 'Venue') {
        setCurrentFilter({ ...currentFilter, venue: i });
      }

      if (title === 'Value') {
        setCurrentFilter({ ...currentFilter, value: i });
      }
    },
    [currentFilter]
  );

  const submit = () => {
    method({
      stat: currentFilter.stat,
      team: currentFilter.team,
      action: currentFilter.action,
      measure: currentFilter.measure,
      metric: currentFilter.metric,
      games: currentFilter.games,
      venue: currentFilter.venue,
      value: currentFilter.value,
    });
  };

  return (
    <StatRuleWrapper>
      <StatRuleRow>
        <SingleFilter
          selection={currentFilter.team}
          selections={team}
          styles={selectStyles}
          title="Team"
          toggleSelection={(i) => updateFilter(i, 'Team')}
        />
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={currentFilter.stat}
          selections={stats}
          styles={selectStyles}
          title="Stat"
          toggleSelection={(i) => updateFilter(i, 'Stat')}
        />
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={currentFilter.venue}
          selections={venue}
          styles={selectStyles}
          title="Venue"
          toggleSelection={(i) => updateFilter(i, 'Venue')}
        />
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={currentFilter.action}
          selections={action}
          styles={selectStyles}
          title="Action"
          toggleSelection={(i) => updateFilter(i, 'Action')}
        />
        <SingleFilter
          selection={currentFilter.measure}
          selections={measure}
          styles={selectStyles}
          title="Measure"
          toggleSelection={(i) => updateFilter(i, 'Measure')}
        />
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={currentFilter.metric}
          selections={metric}
          styles={selectStyles}
          title="Metric"
          toggleSelection={(i) => updateFilter(i, 'Metric')}
        />
      </StatRuleRow>
      <StatRuleRow>
        <SingleFilter
          selection={currentFilter.value}
          selections={odds}
          styles={selectStyles}
          title="Value"
          toggleSelection={(i) => updateFilter(i, 'Value')}
        />
        <SingleFilter
          selection={currentFilter.games}
          selections={games}
          styles={selectStyles}
          title="Games"
          toggleSelection={(i) => updateFilter(i, 'Games')}
        />
      </StatRuleRow>
      <SubmitButton disabled={isDisabled()} onClick={submit}>
        {button}
      </SubmitButton>
    </StatRuleWrapper>
  );
};

StatRule.propTypes = {
  button: string.isRequired,
  filter: shape({
    stat: shape({
      label: string.isRequired,
    }),
    action: shape({
      label: string.isRequired,
    }),
    team: shape({
      label: string.isRequired,
    }),
    measure: shape({
      label: string.isRequired,
    }),
    metric: shape({
      label: string.isRequired,
    }),
    value: shape({
      label: string.isRequired,
    }),
    games: shape({
      label: string.isRequired,
    }),
    venue: shape({
      label: string.isRequired,
    }),
  }),
  method: func.isRequired,
};

StatRule.defaultProps = {
  filter: null,
};

export default StatRule;
