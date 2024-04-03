import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { initializeApp } from '../store/reducers/utilsReducer';
import { AppRootStateType } from '../store/store';

import { Header, Preloader, Sidebar } from '@/shared/ui';

export const Layout: FC = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector<AppRootStateType, boolean>(state => state.utils.isFetching);
  const initialized = useSelector<AppRootStateType, boolean>(state => state.utils.initialized);

  useEffect(() => {
    if (!initialized) {
      // @ts-ignore
      dispatch(initializeApp());
    }
  }, [dispatch, initialized]);

  if (!initialized) return <Preloader />;

  return (
    <div className="layout">
      <Header />
      {isFetching && <Preloader />}
      {/* <div className="page"> */}
      <div className="container">
        <div className="page">
          <Sidebar />
          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
