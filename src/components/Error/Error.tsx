import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import ErrorWrapper from './Error.styles';
import useElementSelect from '../../hooks/useElementSelect';

type ErrorProps = {
  message: string;
  resetError: () => void;
};

const Error = (props: ErrorProps) => {
  const { message, resetError } = props;
  const ref = useRef(null);

  useElementSelect(ref, () => resetError());

  return (
    <ErrorWrapper ref={ref} onBlur={resetError}>
      <FontAwesomeIcon icon={faExclamationCircle} size="1x" />
      <p>{message}</p>
    </ErrorWrapper>
  );
};

export default Error;
