import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import s from './User.module.scss';

import UserImg from '@/shared/assets/img/ava_default.jpg';
import { Button } from '@/shared/ui';

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
        <Button variant="primary" disabled={btnActive} onClick={onClickHandlerFollow}>
          follow
        </Button>
      ) : (
        <Button variant="secondary" disabled={btnActive} onClick={onClickHandlerUnFollow}>
          unfollow
        </Button>
      )}
    </div>
  );
};
