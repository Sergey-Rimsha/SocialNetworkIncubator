import { FC } from 'react';

import { Login } from './Login';

import { authLoginTC, authLogout } from '@/store/reducers/authReducer.ts';
import { AppDispatch } from '@/store/store.ts';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginContainer: FC = () => {
  const dispatch = AppDispatch();

  const onClickLogout = (): void => {
    // @ts-ignore
    dispatch(authLogout());
  };

  const onHandlerSubmit = (formData: FormDataType): void => {
    // @ts-ignore
    dispatch(authLoginTC(formData));
  };

  return <Login onClickLogout={onClickLogout} onHandlerSubmit={onHandlerSubmit} />;
};
