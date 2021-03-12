import React from 'react';
import { array, func, shape, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  LoginInputIcon,
  LoginInputText,
  LoginInputWrapper,
} from './LoginInputWrapper';

const LoginInput = (props) => {
  const { icon, onChange, placeholder, type } = props;

  return (
    <LoginInputWrapper>
      <LoginInputIcon>
        <FontAwesomeIcon icon={icon} size="1x" />
      </LoginInputIcon>
      <LoginInputText
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </LoginInputWrapper>
  );
};

LoginInput.propTypes = {
  icon: shape({
    icon: array,
  }).isRequired,
  onChange: func.isRequired,
  placeholder: string.isRequired,
  type: string.isRequired,
};

export default LoginInput;
