import React from 'react';
import { bool, func, string } from 'prop-types';

import {
  LogoContainer,
  LogoIcon,
  LogoText,
  UserLoginContainer,
  UserLoginWrapper,
} from './UserLogin.styles';
import UserLoginForm from './UserLoginForm/UserLoginForm';
import icon from '../../assets/images/statistico-toolbar-small.png';

type UserLoginProps = {
  error: string | null;
  loading: boolean;
  login: (email: string, password: string) => void;
};

const UserLogin = (props: UserLoginProps) => {
  const { login, loading, error } = props;

  return (
    <UserLoginWrapper>
      <UserLoginContainer>
        <LogoContainer>
          <LogoIcon src={icon} maxWidth="50px" />
          <LogoText
            src="https://statistico-assets.s3.eu-west-2.amazonaws.com/statistico-logotype-white_l.png"
            height="30px"
            maxWidth="250px"
          />
        </LogoContainer>
        <UserLoginForm error={error} loading={loading} login={login} />
      </UserLoginContainer>
    </UserLoginWrapper>
  );
};

UserLogin.propTypes = {
  loading: bool.isRequired,
  login: func.isRequired,
  error: string,
};

UserLogin.defaultProps = {
  error: null,
};

export default UserLogin;
