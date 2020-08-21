import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import ResultList from '../../ResultList/ResultList';
import Wrapper from '../../Wrapper/Wrapper';
import classes from './TeamMatch.module.css';

const teamMatch = (props) => {
  const { seasonIds, teamId } = props;

  return (
    <Wrapper styles={classes.ResultList}>
      <ErrorBoundary>
        <ResultList teamId={teamId} seasonIds={seasonIds} />
      </ErrorBoundary>
    </Wrapper>
  );
};

teamMatch.propTypes = {
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default teamMatch;
