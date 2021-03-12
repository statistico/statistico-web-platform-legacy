import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Loader from '../Loader/Loader';
import LoginInput from './LoginInput/LoginInput';
import {
  LoginButton,
  LogoIcon,
  LogoText,
  UserLoginForm,
  UserLoginWrapper,
} from './UserLoginWrapper';
import icon from '../../assets/images/statistico-toolbar-small.png';
import text from '../../assets/images/statistico-logotype-blue_s.png';

const UserLogin = (props) => {
  const { login, loading, error } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <UserLoginWrapper>
      <Loader loading={loading}>
        <UserLoginForm>
          <LogoIcon src={icon} />
          <LogoText src={text} />
          <LoginInput
            icon={faUser}
            type="text"
            placeholder="Username"
            onChange={setEmail}
          />
          <LoginInput
            icon={faLock}
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
          <p>{error ?? null}</p>
          <LoginButton type="submit" onClick={(e) => onSubmit(e)}>
            Login
          </LoginButton>
        </UserLoginForm>
      </Loader>
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
