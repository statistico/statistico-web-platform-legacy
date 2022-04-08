import React, { SyntheticEvent } from 'react';
import { Oval } from 'react-loader-spinner';

import ButtonWrapper from './Button.styles';

type ButtonProps = {
  loading: boolean;
  onClick: (e: SyntheticEvent) => void;
  text: string;
};

const Button = (props: ButtonProps): JSX.Element => {
  const { loading, onClick, text } = props;

  return (
    <ButtonWrapper onClick={onClick}>
      {loading ? (
        <Oval
          ariaLabel="loading-indicator"
          height={30}
          width={30}
          strokeWidth={4}
          color="white"
          secondaryColor="#f1f1f1"
        />
      ) : (
        text
      )}
    </ButtonWrapper>
  );
};

export default Button;
