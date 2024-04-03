import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { HeaderContainer } from '../components/Header/HeaderContainer';
import { Preloader } from '../components/Preloader/Preloader';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { initializeApp } from '../store/reducers/utilsReducer';
import { AppRootStateType } from '../store/store';

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
      <HeaderContainer />
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
