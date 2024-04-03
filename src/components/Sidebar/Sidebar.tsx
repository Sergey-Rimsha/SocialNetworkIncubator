import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import s from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }): string => (isActive ? `${s.menu__item_active}` : '');

  return (
    <section className={s.sidebar}>
      <nav className={s.menu}>
        <div className={s.menu__item}>
          <NavLink className={setActive} to="/profile">
            Profile
          </NavLink>
        </div>
        <div className={s.menu__item}>
          <NavLink className={setActive} to="/dialogs">
            Dialogs
          </NavLink>
        </div>
        <div className={s.menu__item}>
          <NavLink className={setActive} to="/chat">
            Chat
          </NavLink>
        </div>
        <div className={s.menu__item}>
          <NavLink className={setActive} to="/users">
            Users
          </NavLink>
        </div>
        <div className={s.menu__item}>
          <NavLink className={setActive} to="/news">
            News
          </NavLink>
        </div>
      </nav>
    </section>
  );
};
