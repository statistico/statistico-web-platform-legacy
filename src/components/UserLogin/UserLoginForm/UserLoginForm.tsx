import React, { SyntheticEvent, useState } from 'react';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '../../Form/Button/Button';
import InputText from '../../Form/Input/InputText';
import Loader from '../../Loader/Loader';
import UserLoginFormWrapper from './UserLoginForm.styles';

type UserLoginFormProps = {
  error: string | null;
  loading: boolean;
  login: (email: string, password: string) => void;
};

const UserLoginForm = (props: UserLoginFormProps) => {
  const { login, loading, error } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <UserLoginFormWrapper>
      <Loader loading={loading}>
        <InputText icon={faUser} onChange={setEmail} type="text" />
        <InputText icon={faLock} onChange={setPassword} type="password" />
        <Button text="LOGIN" onClick={onSubmit} />
      </Loader>
    </UserLoginFormWrapper>
  );
};

export default UserLoginForm;
