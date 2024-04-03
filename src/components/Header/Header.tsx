import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';

import s from './Header.module.scss';

import { AuthInitialStateType } from '@/store/reducers/authReducer.ts';

export type HeaderPropsType = {
  auth: AuthInitialStateType;
};

export const Header: FC<HeaderPropsType> = ({ auth }) => {
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
