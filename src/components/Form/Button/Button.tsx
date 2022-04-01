import React, { SyntheticEvent } from 'react';

import ButtonWrapper from './Button.styles';

type ButtonProps = {
  onClick: (e: SyntheticEvent) => void;
  text: string;
};

const Button = (props: ButtonProps): JSX.Element => {
  const { onClick, text } = props;

  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};

export default Button;
