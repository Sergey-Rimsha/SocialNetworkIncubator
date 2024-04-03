import { FC, memo, useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Profile } from './Profile';

import {
  addPost,
  onChangeMessPost,
  ProfileStateType,
  putPhotoProfileTC,
  putStatusUserTC,
  setChangeStatus,
  setUserProfileTC,
} from '@/store/reducers/profileReducer.ts';
import { AppDispatch, AppRootStateType } from '@/store/store.ts';

export const ProfileContainer: FC = memo(() => {
  const profilePage = useSelector<AppRootStateType, ProfileStateType>(state => state.profilePage);
  const status = useSelector<AppRootStateType, string>(state => state.profilePage.status);
  const changeStatus = useSelector<AppRootStateType, string>(state => state.profilePage.changeStatus);

  const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

  const dispatch = AppDispatch();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.userId) {
      navigate(`/profile/${loginId}`);
    }
  }, [params.userId, navigate, loginId]);

  useEffect(() => {
    if (params.userId) {
      // @ts-ignore
      dispatch(setUserProfileTC(params.userId));
    }
  }, [params.userId, dispatch]);

  const addNewPost = useCallback(() => {
    dispatch(addPost());
  }, [dispatch]);

  const onChangeHandlerPostText = useCallback(
    (text: string) => {
      dispatch(onChangeMessPost(text));
    },
    [dispatch],
  );

  const onChangeStatusText = useCallback(
    (text: string) => {
      dispatch(setChangeStatus(text));
    },
    [dispatch],
  );

  const addStatus = useCallback(() => {
    if (changeStatus !== status) {
      if (loginId) {
        // @ts-ignore
        dispatch(putStatusUserTC(changeStatus, loginId));
      }
    }
  }, [changeStatus, status, dispatch, loginId]);

  const addPhoto = useCallback(
    (filePhoto: File) => {
      // @ts-ignore
      dispatch(putPhotoProfileTC(filePhoto));
    },
    [dispatch],
  );

  return (
    <Profile
      status={status}
      changeStatus={changeStatus}
      profilePage={profilePage}
      addNewPost={addNewPost}
      addStatus={addStatus}
      onChangeStatusText={onChangeStatusText}
      onChangeHandlerPostText={onChangeHandlerPostText}
      addPhoto={addPhoto}
    />
  );
});
