import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import UserImg from '../../assets/img/ava_default.jpg';

import s from './User.module.scss';

import { Button } from '@/components/Button/Button.tsx';

type UserPropsType = {
  id: number;
  name: string;
  status: string | null;
  followed: boolean;
  userPhoto: string | null;
  onFollowUsers: (userId: number) => void;
  unFollowUsers: (userId: number) => void;

  toggleUserId: number;
  toggleButton: boolean;
};

export const User: FC<UserPropsType> = ({
  id,
  onFollowUsers,
  unFollowUsers,
  userPhoto,
  toggleUserId,
  followed,
  toggleButton,
  name,
  status,
}) => {
  const onClickHandlerFollow = (): void => {
    onFollowUsers(id);
  };
  const onClickHandlerUnFollow = (): void => {
    unFollowUsers(id);
  };

  const userPhotoSrc = userPhoto || UserImg;

  const btnActive = id === toggleUserId ? toggleButton : false;

  return (
    <div className={s.userBox}>
      <NavLink to={`/profile/${id}`}>
        <div className={s.userImg}>
          <img src={userPhotoSrc} alt="userPhoto" />
        </div>
      </NavLink>

      <div className={s.userInfo}>
        <div className={s.userInfo__name}>{name}</div>
        <div>status: {status}</div>
      </div>
      {/* <div className="user-info"> */}
      {/*	<div>country: {"props.country"}</div> */}
      {/*	<div>city: {"props.city"}</div> */}
      {/* </div> */}
      {!followed ? (
        <Button variant="primary" value="follow" type="button" disabled={btnActive} onClick={onClickHandlerFollow} />
      ) : (
        <Button
          variant="secondary"
          value="unfollow"
          type="button"
          disabled={btnActive}
          onClick={onClickHandlerUnFollow}
        />
      )}
    </div>
  );
};
