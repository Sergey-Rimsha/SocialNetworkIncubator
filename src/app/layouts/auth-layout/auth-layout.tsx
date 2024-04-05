import { FC } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { AppRootStateType } from '@/store/store.ts';

export const AuthLayout: FC = () => {
  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
