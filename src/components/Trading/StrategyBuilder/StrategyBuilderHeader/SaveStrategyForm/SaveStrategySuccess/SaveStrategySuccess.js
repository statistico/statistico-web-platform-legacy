import React from 'react';
import { string } from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SaveStrategySuccessWrapper from './SaveStrategySuccessWrapper';

const SaveStrategySuccess = (props) => {
  const { name } = props;

  return (
    <SaveStrategySuccessWrapper>
      <FontAwesomeIcon icon={faCheckCircle} size="3x" />
      <p>
        {name}
        {' '}
        saved. Good Luck
      </p>
    </SaveStrategySuccessWrapper>
  );
};

SaveStrategySuccess.propTypes = {
  name: string.isRequired,
};

export default SaveStrategySuccess;
