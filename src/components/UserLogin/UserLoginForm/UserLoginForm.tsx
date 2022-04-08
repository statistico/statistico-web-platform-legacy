import React, { SyntheticEvent, useState } from 'react';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Form/Button/Button';
import Error from '../../Error/Error';
import InputText from '../../Form/Input/InputText';
import UserLoginFormWrapper from './UserLoginForm.styles';

type UserLoginFormProps = {
  error: string | null;
  loading: boolean;
  login: (email: string, password: string) => void;
  resetError: () => void;
};

const UserLoginForm = (props: UserLoginFormProps) => {
  const { login, loading, error, resetError } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <UserLoginFormWrapper>
      <InputText icon={faUser} onChange={setEmail} type="text" />
      <InputText icon={faLock} onChange={setPassword} type="password" />
      {error && <Error message={error} resetError={resetError} />}
      <Button text="LOGIN" loading={loading} onClick={onSubmit} />
    </UserLoginFormWrapper>
  );
};

export default UserLoginForm;
