import { FC, memo, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AddPost } from './AddPost/AddPost';
import { EditeProfile } from './EditeProfile/EditeProfile';
import { LoadingPhoto } from './EditeProfile/LoadingPhoto/LoadingPhoto';
import { Post } from './Post/Post';
import s from './Profile.module.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

import UserImg from '@/shared/assets/img/ava_default.jpg';
import { Button } from '@/shared/ui';
import { ProfileStateType } from '@/store/reducers/profileReducer.ts';
import { AppRootStateType } from '@/store/store.ts';

type StateType = {
  profilePage: ProfileStateType;
  status: string;
  changeStatus: string;
  addNewPost: () => void;
  addStatus: () => void;
  onChangeHandlerPostText: (text: string) => void;
  onChangeStatusText: (text: string) => void;
  addPhoto: (file: File) => void;
};

export const Profile: FC<StateType> = memo((props: StateType) => {
  const [editeProfile, setEditeProfile] = useState<boolean>(false);

  const loginId = useSelector<AppRootStateType, number | null>(state => state.auth.id);

  const params = useParams();

  const userPhoto: string = props.profilePage.user.photos.large;

  const onClickHandlerEditeMode = (edit: boolean): void => {
    setEditeProfile(edit);
  };

  const saveSettings = (photo: File): void => {
    if (photo) {
      props.addPhoto(photo);
      setEditeProfile(false);
    }
  };

  useEffect(() => {
    if (`${params.userId}` === `${loginId}`) {
      // setEditeProfile(true)
    }
  }, [params.userId, loginId]);

  return (
    <section className={s.profile}>
      <div className={s.user}>
        <div>
          <div className={s.user__img}>
            <img src={userPhoto || UserImg} alt="user-img" />
          </div>

          <div className={s.user__edite}>
            <LoadingPhoto saveSettings={saveSettings} />
          </div>
        </div>

        {!editeProfile && (
          <div>
            <ProfileInfo
              status={props.status}
              changeStatus={props.changeStatus}
              addStatus={props.addStatus}
              user={props.profilePage.user}
              onChangeStatusText={props.onChangeStatusText}
            />
            <Button variant="primary" onClick={() => onClickHandlerEditeMode(true)}>
              edit
            </Button>
          </div>
        )}
        {editeProfile && <EditeProfile onClickHandlerEditeMode={onClickHandlerEditeMode} />}
      </div>

      <AddPost
        changeMessage={props.profilePage.changeMessage}
        addNewPost={props.addNewPost}
        oChangeHandlerPostText={props.onChangeHandlerPostText}
      />
      {props.profilePage.posts.map((post, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <Post key={i} id={post.id} message={post.message} likesCount={post.likesCount} />;
      })}
    </section>
  );
});
