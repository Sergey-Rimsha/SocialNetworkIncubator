import { FC } from 'react';

import { useSelector } from 'react-redux';

import { Header } from './Header';

import { AuthInitialStateType } from '@/store/reducers/authReducer.ts';
import { AppRootStateType } from '@/store/store.ts';

export const HeaderContainer: FC = () => {
  const auth = useSelector<AppRootStateType, AuthInitialStateType>(state => state.auth);

  return <Header auth={auth} />;
};
