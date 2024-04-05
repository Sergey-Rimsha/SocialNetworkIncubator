import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { Header, Preloader, Sidebar } from '@/shared/ui';
import { initializeApp } from '@/store/reducers/utilsReducer.ts';
import { AppRootStateType } from '@/store/store.ts';

export const MainLayout: FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector<AppRootStateType, boolean>(state => state.utils.isFetching);

  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

  const initialized = useSelector<AppRootStateType, boolean>(state => state.utils.initialized);

  useEffect(() => {
    if (!initialized) {
      // @ts-ignore
      dispatch(initializeApp());
    }
  }, [dispatch, initialized]);

  if (!initialized && !isAuth) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="layout">
      <Header />
      {isFetching && <Preloader />}
      <div className="container">
        <div className="page">
          <Sidebar />
          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
