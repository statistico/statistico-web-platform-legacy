import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { func, shape, string } from 'prop-types';

import ResultRuleWrapper from './ResultRuleWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';
import { games, result, team, venue } from '../../../../../../config/filters';
import selectStyles from '../../../../../../config/form-styles';

const SubmitButton = styled.div`
  margin: 20px 0 20px 0;
  cursor: pointer;
  font-size: 14px;
  background-color: #23262b;
  padding: 10px 25px 10px 25px;
  color: #ffffff;
  border-radius: 10px;
`;

const ResultRule = (props) => {
  const { buttonText, filter, method } = props;
  const [currentFilter, setCurrentFilter] = useState(
    filter ?? {
      team: team[0],
      result: result[0],
      games: games[0],
      venue: venue[0],
    }
  );

  const isDisabled = () => {
    return (
      !currentFilter.team ||
      !currentFilter.result ||
      !currentFilter.games ||
      !currentFilter.venue
    );
  };

  const updateFilter = useCallback(
    (i, title) => {
      if (title === 'Games') {
        setCurrentFilter({ ...currentFilter, games: i });
      }

      if (title === 'Result') {
        setCurrentFilter({ ...currentFilter, result: i });
      }

      if (title === 'Team') {
        setCurrentFilter({ ...currentFilter, team: i });
      }

      if (title === 'Venue') {
        setCurrentFilter({ ...currentFilter, venue: i });
      }
    },
    [currentFilter]
  );

  const submit = () => {
    method({
      team: currentFilter.team,
      result: currentFilter.result,
      games: currentFilter.games,
      venue: currentFilter.venue,
    });
  };

  return (
    <ResultRuleWrapper>
      <SingleFilter
        selection={currentFilter.team}
        selections={team}
        styles={selectStyles}
        title="Team"
        toggleSelection={(i) => updateFilter(i, 'Team')}
      />
      <SingleFilter
        selection={currentFilter.result}
        selections={result}
        styles={selectStyles}
        title="Result"
        toggleSelection={(i) => updateFilter(i, 'Result')}
      />
      <SingleFilter
        selection={currentFilter.games}
        selections={games}
        styles={selectStyles}
        title="Games"
        toggleSelection={(i) => updateFilter(i, 'Games')}
      />
      <SingleFilter
        selection={currentFilter.venue}
        selections={venue}
        styles={selectStyles}
        title="Venue"
        toggleSelection={(i) => updateFilter(i, 'Venue')}
      />
      <SubmitButton disabled={isDisabled()} onClick={submit}>
        {buttonText}
      </SubmitButton>
    </ResultRuleWrapper>
  );
};

ResultRule.propTypes = {
  buttonText: string.isRequired,
  filter: shape({
    team: shape({
      label: string.isRequired,
    }),
    result: shape({
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

ResultRule.defaultProps = {
  filter: null,
};

export default ResultRule;
