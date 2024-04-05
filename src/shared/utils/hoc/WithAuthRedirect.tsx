import { ComponentPropsWithoutRef, FC } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppRootStateType } from '@/store/store.ts';

export const WithAuthRedirect: FC<ComponentPropsWithoutRef<'div'>> = ({ children }) => {
  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

  const redirect = '/auth/login';

  if (!isAuth) {
    return <Navigate to={redirect} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
