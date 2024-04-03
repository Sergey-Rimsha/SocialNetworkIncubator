import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { AppRootStateType } from '../store/store';

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const WithAuthRedirect: FC<DivPropsType> = ({ children }) => {
  const navigate = useNavigate();

  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

  const redirect = '/auth';

  useEffect(() => {
    if (!isAuth) navigate(redirect);
  }, [isAuth, navigate]);

  if (!isAuth) return <Navigate to={redirect} />;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
