import { FC, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { UsersPage } from './UsersPage';

import { followUsersTC, StateUsersType, thunkOnPageChanged, unFollowUsersTC } from '@/store/reducers/usersReducer.ts';
import { AppDispatch, AppRootStateType } from '@/store/store.ts';

export const UsersPageContainer: FC = () => {
  const { users, currentPage, userPageSize, totalCount } = useSelector<AppRootStateType, StateUsersType>(
    state => state.usersPage,
  );
  const toggleUserId = useSelector<AppRootStateType, number>(state => state.usersPage.toggleIsButtons.userId);
  const toggleButton = useSelector<AppRootStateType, boolean>(state => state.usersPage.toggleIsButtons.disableButton);

  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth);

  const dispatch = AppDispatch();

  useEffect(() => {
    if (isAuth) {
      // @ts-ignore
      dispatch(thunkOnPageChanged(currentPage, userPageSize));
    }
  }, [currentPage, dispatch, isAuth, userPageSize]);

  // eslint-disable-next-line no-magic-numbers
  const onPageChanged = (pageNumber: number, countUsers = 10): void => {
    // @ts-ignore
    dispatch(thunkOnPageChanged(pageNumber, countUsers));
  };

  const onFollowUsers = (userId: number): void => {
    // @ts-ignore
    dispatch(followUsersTC(userId, currentPage, userPageSize));
  };

  const unFollowUsers = (userId: number): void => {
    // @ts-ignore
    dispatch(unFollowUsersTC(userId, currentPage, userPageSize));
  };

  return (
    <UsersPage
      users={users}
      totalCount={totalCount}
      userPageSize={userPageSize}
      currentPage={currentPage}
      toggleUserId={toggleUserId}
      toggleButton={toggleButton}
      onFollowUsers={onFollowUsers}
      onPageChanged={onPageChanged}
      unFollowUsers={unFollowUsers}
    />
  );
};
