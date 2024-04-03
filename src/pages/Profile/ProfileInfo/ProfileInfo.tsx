import { ChangeEvent, FC, ReactElement, useState } from 'react';

import { useSelector } from 'react-redux';

import s from '../Profile.module.scss';

import { UserType } from '@/store/reducers/profileReducer.ts';
import { AppRootStateType } from '@/store/store.ts';

type ProfileInfoPropsType = {
  status: string;
  user: UserType;
  changeStatus: string;
  addStatus: () => void;
  onChangeStatusText: (text: string) => void;
};

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
  user,
  onChangeStatusText,
  changeStatus,
  status,
  addStatus,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

  const onDoubleClick = (): void => {
    if (user.userId === loginId) {
      setEditMode(true);
    }
  };

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    onChangeStatusText(e.currentTarget.value);
  };

  const onBlurHandler = (): void => {
    setEditMode(false);
    addStatus();
  };

  const showStatus = (): ReactElement => {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {!editMode ? (
          <span onDoubleClick={onDoubleClick}>{`status: ${status || ''}`}</span>
        ) : (
          // eslint-disable-next-line jsx-a11y/no-autofocus
          <input onChange={onChangeStatus} autoFocus onBlur={onBlurHandler} value={changeStatus} />
        )}
      </>
    );
  };

  const showContacts = (): (ReactElement | string)[] => {
    return Object.keys(user.contacts).map(key => {
      if (user.contacts[key]) {
        return (
          <div key={key} className={s.user__website}>
            <a href={`${user.contacts[key]}`}>{key}</a>
            {/* <span> */}
            {/*	{props.user.contacts[key]} */}
            {/* </span> */}
          </div>
        );
      }

      return '';
    });
  };

  return (
    <div className={s.user__info}>
      <div className={s.user__name}>{user.fullName}</div>
      <div className={s.user__status}>{showStatus()}</div>
      <div className={s.user__aboutMe}>{user.aboutMe || ''}</div>

      <div className={s.user__lookingForAJob}>{user.lookingForAJob ? user.lookingForAJobDescription : ''}</div>
      {/* <div className="user__education"> */}
      {/*	БГПК */}
      {/* </div> */}
      {/* <div className="user__web-site"> */}
      {/*	<a href="https://github.com/Sergey-Rimsha">https://github.com/Sergey-Rimsha</a> */}
      {/* </div> */}
      <div className={s.user__link}>
        <span>Link:</span>
        {showContacts()}
      </div>
    </div>
  );
};
