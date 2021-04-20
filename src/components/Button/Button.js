import React from 'react';
import { func, node, string } from 'prop-types';

import ButtonWrapper from './ButtonWrapper';

const Button = (props) => {
  const {
    backgroundColor,
    children,
    color,
    fontSize,
    marginTop,
    onClick,
  } = props;

  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      marginTop={marginTop}
      onClick={() => onClick()}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  backgroundColor: string.isRequired,
  color: string.isRequired,
  children: node.isRequired,
  fontSize: string.isRequired,
  marginTop: string.isRequired,
  onClick: func.isRequired,
};

export default Button;
