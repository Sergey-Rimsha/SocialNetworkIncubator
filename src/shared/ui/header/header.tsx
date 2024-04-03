import { FC } from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from './header.module.scss';

import logo from '@/shared/assets/img/logo.svg';
import { AuthInitialStateType } from '@/store/reducers/authReducer.ts';
import { AppRootStateType } from '@/store/store.ts';

export const Header: FC = () => {
  const auth = useSelector<AppRootStateType, AuthInitialStateType>(state => state.auth);

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__block}>
          <div className={s.header__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.header__login}>
            <NavLink to="/auth">{auth.isAuth ? auth.login : 'login'}</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
